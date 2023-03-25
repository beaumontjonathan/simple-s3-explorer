export type Bucket = {
  name: string;
  region: string;
};

export type ListedBucket = {
  name: string;
};

export type BucketObject = {
  key: string;
  bucketName: string;
  bucketRegion: string;
};
