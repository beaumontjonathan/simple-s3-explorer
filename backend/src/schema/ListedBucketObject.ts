import { ListedBucketObjectResolvers } from '../generated/graphql';

export const ListedBucketObject: ListedBucketObjectResolvers = {
  key: ({ key }) => key,
  lastModified: ({ lastModified }) => lastModified,
  etag: ({ etag }) => etag,
  size: ({ size }) => size,
  storageClass: ({ storageClass }) => storageClass,
};
