import { S3Client, ListBucketsCommand, NoSuchBucket } from '@aws-sdk/client-s3';
import {
  loadSharedConfigFiles,
  getProfileName,
} from '@aws-sdk/shared-ini-file-loader';
import { fromIni } from '@aws-sdk/credential-providers';
import { QueryResolvers } from '../generated/graphql';
import { getRegionForBucket } from '../helpers';
import { GraphQLError } from 'graphql';

export const Query: QueryResolvers = {
  hello: () => 'world',
  profile: async (_, { name }) => {
    const profileName = getProfileName({ profile: name ?? undefined });
    const { configFile } = await loadSharedConfigFiles();
    if (profileName in configFile) {
      return {
        credentials: fromIni({ profile: profileName }),
        name: profileName,
      };
    }
    throw new GraphQLError('Unknown profile');
  },
  profiles: async () => {
    const { configFile } = await loadSharedConfigFiles();
    const profileNames = Object.keys(configFile);
    return profileNames.map((name) => ({
      credentials: fromIni({ profile: name }),
      name,
    }));
  },
};
