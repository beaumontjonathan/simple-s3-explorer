import {
  S3Client,
  HeadObjectCommand,
  GetObjectTaggingCommand,
} from '@aws-sdk/client-s3';
import { BucketObjectResolvers } from '../generated/graphql';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const BucketObject: BucketObjectResolvers = {
  key: ({ key }) => key,
  lastModified: ({ lastModified }) => lastModified,
  etag: ({ etag }) => etag,
  size: ({ size }) => size,
  storageClass: ({ storageClass }) => storageClass,
  tags: async ({ bucketRegion, bucketName, key }) => {
    const { TagSet: tagSet = [] } = await new S3Client({
      region: bucketRegion,
    }).send(
      new GetObjectTaggingCommand({
        Bucket: bucketName,
        Key: key,
      })
    );

    return tagSet.map((tag) => ({
      key: tag.Key ?? '',
      value: tag.Value ?? '',
    }));
  },
  metadata: async ({ bucketRegion, bucketName, key }) => {
    const res = await new S3Client({ region: bucketRegion }).send(
      new HeadObjectCommand({
        Bucket: bucketName,
        Key: key,
      })
    );
    const systemDefinedMetadataKeys = [
      'ContentType',
      'CacheControl',
      'ContentDisposition',
      'ContentEncoding',
      'ContentLanguage',
      'Expires',
    ] as const;
    return [
      ...systemDefinedMetadataKeys.flatMap((key) =>
        key in res
          ? { key, value: res[key]?.toString() ?? '', userDefined: false }
          : []
      ),
      ...Object.entries(res.Metadata ?? {}).map(([key, value]) => ({
        key,
        value,
        userDefined: true,
      })),
    ];
  },
};
