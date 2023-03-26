import { BucketObjectTagResolvers } from '../generated/graphql';

export const BucketObjectTag: BucketObjectTagResolvers = {
  key: ({ key }) => key,
  value: ({ value }) => value,
};
