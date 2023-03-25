import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import { createSchema } from 'graphql-yoga';
import { Resolvers } from '../generated/graphql';
import { Query } from './Query';
import { Mutation } from './Mutation';
import { Bucket } from './Bucket';
import { ListedBucket } from './ListedBucket';
import { BucketObject } from './BucketObject';

const resolvers: Resolvers = {
  Query,
  Mutation,
  Bucket,
  ListedBucket,
  BucketObject,
};

const typeDefs = readFileSync(
  resolve(__dirname, '..', '..', '..', 'schema.graphql'),
  'utf-8'
);

export const schema = createSchema({
  typeDefs,
  resolvers,
});
