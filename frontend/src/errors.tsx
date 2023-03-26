export class BucketNotFoundError extends Error {
  readonly bucketName: string;

  constructor({ bucketName }: { bucketName: string }) {
    super(`Cannot find bucket: "${bucketName}"`);
    this.name = 'BucketNotFoundError';
    this.bucketName = bucketName;
  }
}

export class ObjectNotFoundError extends Error {
  readonly objectKey: string;

  constructor({ objectKey }: { objectKey: string }) {
    super(`Cannot find object: "${objectKey}"`);
    this.name = 'ObjectNotFoundError';
    this.objectKey = objectKey;
  }
}
