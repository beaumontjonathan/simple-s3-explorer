import { BucketObjectResolvers } from '../generated/graphql';

export const BucketObject: BucketObjectResolvers = {
  key: ({ key }) => key,
};
