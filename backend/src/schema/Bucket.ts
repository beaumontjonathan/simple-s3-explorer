import {
  S3Client,
  ListObjectsV2Command,
  GetObjectAttributesCommand,
  ObjectAttributes,
  NoSuchKey,
  ObjectStorageClass,
} from '@aws-sdk/client-s3';
import { fromIni } from '@aws-sdk/credential-providers';
import { BucketResolvers } from '../generated/graphql';

export const Bucket: BucketResolvers = {
  name: ({ name }) => name,
  region: ({ region }) => region,
  prefix: async ({ credentials, name, region }, { prefix }) => {
    const results = await new S3Client({ region, credentials }).send(
      new ListObjectsV2Command({
        Bucket: name,
        Delimiter: '/',
        Prefix: prefix,
        EncodingType: 'url',
      })
    );
    return {
      commonPrefixes: (results.CommonPrefixes ?? []).map((p) => ({
        prefix: p.Prefix ?? '',
      })),
      objects: (results.Contents ?? []).flatMap((item) =>
        typeof item.Key === 'string'
          ? {
              bucketName: name,
              bucketRegion: region,
              key: item.Key,
              lastModified: item.LastModified?.toISOString() ?? '',
              etag: item.ETag ?? '',
              size: item.Size ?? 0,
              storageClass:
                (item.StorageClass as ObjectStorageClass) ??
                ObjectStorageClass.STANDARD,
            }
          : []
      ),
    };
  },
  objects: async ({ credentials, name, region }, { first }) => {
    const res = await new S3Client({ region, credentials }).send(
      new ListObjectsV2Command({
        Bucket: name,
        MaxKeys: first ?? undefined,
      })
    );
    const { Contents: contents = [] } = res;

    return contents.flatMap((item) =>
      typeof item.Key === 'string'
        ? {
            bucketName: name,
            bucketRegion: region,
            key: item.Key,
            lastModified: item.LastModified?.toISOString() ?? '',
            etag: item.ETag ?? '',
            size: item.Size ?? 0,
            storageClass:
              (item.StorageClass as ObjectStorageClass) ??
              ObjectStorageClass.STANDARD,
          }
        : []
    );
  },
  object: async ({ name, region, credentials }, { objectKey }) => {
    try {
      const object = await new S3Client({
        region,
        credentials,
      }).send(
        new GetObjectAttributesCommand({
          Bucket: name,
          Key: objectKey,
          ObjectAttributes: [
            ObjectAttributes.ETAG,
            ObjectAttributes.OBJECT_SIZE,
            ObjectAttributes.OBJECT_PARTS,
            ObjectAttributes.STORAGE_CLASS,
          ],
        })
      );

      return {
        credentials,
        bucketName: name,
        bucketRegion: region,
        key: objectKey,
        lastModified: object.LastModified?.toISOString() ?? '',
        etag: object.ETag ?? '',
        size: object.ObjectSize ?? 0,
        storageClass:
          (object.StorageClass as ObjectStorageClass) ??
          ObjectStorageClass.STANDARD,
      };
    } catch (error) {
      if (error instanceof NoSuchKey) {
        return null;
      }

      throw error;
    }
  },
};
