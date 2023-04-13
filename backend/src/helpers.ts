import { fromIni } from '@aws-sdk/credential-providers';
import { AwsCredentialIdentityProvider } from '@aws-sdk/types';
import { GetBucketLocationCommand, S3Client } from '@aws-sdk/client-s3';

export async function getRegionForBucket({
  bucket,
  credentials,
}: {
  bucket: string;
  credentials: AwsCredentialIdentityProvider;
}): Promise<string> {
  const { LocationConstraint: region } = await new S3Client({
    credentials,
    region: 'us-east-1',
  }).send(
    new GetBucketLocationCommand({
      Bucket: bucket,
    })
  );

  // As per the docs, an empty region means us-east-1
  // https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html
  return region ?? 'us-east-1';
}

export const credentialsProvider = ({ profile }: { profile: string }) =>
  fromIni({ profile });
