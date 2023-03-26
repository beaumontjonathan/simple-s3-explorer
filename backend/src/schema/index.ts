import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import { createSchema } from 'graphql-yoga';
import { Resolvers } from '../generated/graphql';
import { Query } from './Query';
import { Mutation } from './Mutation';
import { Bucket } from './Bucket';
import { ListedBucket } from './ListedBucket';
import { BucketObject } from './BucketObject';
import { ListedBucketObject } from './ListedBucketObject';
import { BucketCommonPrefix } from './BucketCommonPrefix';
import { BucketObjectMetadataItem } from './BucketObjectMetadataItem';
import { BucketObjectTag } from './BucketObjectTag';
import { BucketPrefix } from './BucketPrefix';
import { Profile } from './Profile';

const resolvers: Resolvers = {
  Query,
  Mutation,
  Profile,
  Bucket,
  ListedBucket,
  BucketObject,
  ListedBucketObject,
  BucketCommonPrefix,
  BucketObjectMetadataItem,
  BucketObjectTag,
  BucketPrefix,
};

const typeDefs = readFileSync(
  resolve(__dirname, '..', '..', '..', 'schema.graphql'),
  'utf-8'
);

export const schema = createSchema({
  typeDefs,
  resolvers,
});
