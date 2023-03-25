import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { BucketResolvers } from '../generated/graphql';

export const Bucket: BucketResolvers = {
  name: ({ name }) => name,
  region: ({ region }) => region,
  objects: async ({ name, region }, { first }) => {
    const { Contents: contents = [] } = await new S3Client({ region }).send(
      new ListObjectsV2Command({
        Bucket: name,
        MaxKeys: first ?? undefined,
      })
    );

    return contents.flatMap((item) =>
      typeof item.Key === 'string'
        ? {
            bucketName: name,
            bucketRegion: region,
            key: item.Key,
          }
        : []
    );
  },
};
