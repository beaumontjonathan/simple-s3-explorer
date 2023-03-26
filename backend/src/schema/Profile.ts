import { S3Client, ListBucketsCommand, NoSuchBucket } from '@aws-sdk/client-s3';
import { fromIni } from '@aws-sdk/credential-providers';
import { ProfileResolvers } from '../generated/graphql';
import { getRegionForBucket } from '../helpers';

export const Profile: ProfileResolvers = {
  name: ({ name }) => name,
  buckets: async (profile, { first }) => {
    const response = await new S3Client({
      credentials: fromIni({
        profile: profile.name,
      }),
    }).send(new ListBucketsCommand({}));
    const { Buckets: buckets = [] } = response;
    return buckets
      .flatMap(({ Name: name, CreationDate: createdAt }) =>
        name ? { name, createdAt: createdAt?.toISOString() ?? '' } : []
      )
      .slice(0, first ?? undefined);
  },
  bucket: async ({ credentials }, { name }) => {
    try {
      const region = await getRegionForBucket({ bucket: name, credentials });

      return { credentials, name, region };
    } catch (error) {
      if (error instanceof NoSuchBucket) return null;

      throw error;
    }
  },
};
