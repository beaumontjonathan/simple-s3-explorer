import { BucketObjectMetadataItemResolvers } from '../generated/graphql';

export const BucketObjectMetadataItem: BucketObjectMetadataItemResolvers = {
  key: ({ key }) => key,
  userDefined: ({ userDefined }) => userDefined,
  value: ({ value }) => value,
};
