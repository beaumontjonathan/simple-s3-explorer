import {
  S3Client,
  ListBucketsCommand,
  GetBucketLocationCommand,
  NoSuchBucket,
} from '@aws-sdk/client-s3';
import { QueryResolvers } from '../generated/graphql';

export const Query: QueryResolvers = {
  hello: () => 'world',
  buckets: async (_, { first }) => {
    const response = await new S3Client({}).send(new ListBucketsCommand({}));
    const { Buckets: buckets = [] } = response;
    return buckets
      .flatMap(({ Name: name }) => (name ? { name } : []))
      .slice(0, first ?? undefined);
  },
  bucket: async (_, { name }) => {
    try {
      const { LocationConstraint: region } = await new S3Client({}).send(
        new GetBucketLocationCommand({
          Bucket: name,
        })
      );

      return { name, region: region ?? 'us-east-1' };
    } catch (error) {
      if (error instanceof NoSuchBucket) return null;

      throw error;
    }
  },
};
