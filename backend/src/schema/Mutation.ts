import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { MutationResolvers } from '../generated/graphql';
import { getRegionForBucket } from '../helpers';

export const Mutation: MutationResolvers = {
  generateObjectDownloadUrl: async (_, { bucket, key }) => {
    const region = await getRegionForBucket(bucket);
    const client = new S3Client({ region });
    const command = new GetObjectCommand({ Bucket: bucket, Key: key });
    const url = await getSignedUrl(client, command, { expiresIn: 100 });
    return url;
  },
};
