import { ObjectStorageClass } from '@aws-sdk/client-s3';

export type Bucket = {
  name: string;
  region: string;
};

export type ListedBucket = {
  name: string;
  createdAt: string;
};

export type BucketObject = {
  bucketName: string;
  bucketRegion: string;
  key: string;
  lastModified: string;
  etag: string;
  size: number;
  storageClass: ObjectStorageClass;
};

export type ListedBucketObject = {
  bucketName: string;
  bucketRegion: string;
  key: string;
  lastModified: string;
  etag: string;
  size: number;
  storageClass: ObjectStorageClass;
};

export type BucketObjectMetadataItem = {
  key: string;
  value: string;
  userDefined: boolean;
};

export type BucketObjectTag = {
  key: string;
  value: string;
};

export type BucketCommonPrefix = {
  prefix: string;
};

export type BucketPrefix = {
  commonPrefixes: BucketCommonPrefix[];
  objects: ListedBucketObject[];
};
