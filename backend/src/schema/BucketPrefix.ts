import { BucketPrefixResolvers } from '../generated/graphql';

export const BucketPrefix: BucketPrefixResolvers = {
  commonPrefixes: ({ commonPrefixes }) => commonPrefixes,
  objects: ({ objects }) => objects,
};
