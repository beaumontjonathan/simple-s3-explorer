import { S3Client, GetBucketLocationCommand } from '@aws-sdk/client-s3';

export async function getRegionForBucket(bucket: string): Promise<string> {
  const { LocationConstraint: region } = await new S3Client({}).send(
    new GetBucketLocationCommand({
      Bucket: bucket,
    })
  );

  // As per the docs, an empty region means us-east-1
  // https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html
  return region ?? 'us-east-1';
}
