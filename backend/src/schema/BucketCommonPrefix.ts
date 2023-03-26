import { BucketCommonPrefixResolvers } from '../generated/graphql';

export const BucketCommonPrefix: BucketCommonPrefixResolvers = {
  prefix: ({ prefix }) => prefix,
};
