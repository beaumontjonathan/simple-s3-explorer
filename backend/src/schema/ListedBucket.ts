import { ListedBucketResolvers } from '../generated/graphql';

export const ListedBucket: ListedBucketResolvers = {
  name: ({ name }) => name,
  createdAt: ({ createdAt }) => createdAt,
  bucket: ({ name }) => {
    throw new Error('Unimplemented');
  },
};
