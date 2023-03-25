import { ListedBucketResolvers } from '../generated/graphql';

export const ListedBucket: ListedBucketResolvers = {
  name: ({ name }) => name,
  bucket: ({ name }) => {
    throw new Error('Unimplemented');
  },
};
