import { S3Client, ListBucketsCommand } from '@aws-sdk/client-s3';
import { QueryResolvers } from '../generated/graphql';

export const Query: QueryResolvers = {
  hello: () => 'world',
  buckets: async () => {
    const client = new S3Client({});
    const response = await client.send(new ListBucketsCommand({}));
    const { Buckets: buckets = [] } = response;
    return buckets.flatMap(({ Name: name }) => (name ? { name } : []));
  },
};
