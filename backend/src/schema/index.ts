import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import { createSchema } from 'graphql-yoga';
import { Resolvers } from '../generated/graphql';
import { Query } from './Query';
import { Mutation } from './Mutation';

const resolvers: Resolvers = {
  Query,
  Mutation,
};

const typeDefs = readFileSync(
  resolve(__dirname, '..', '..', '..', 'schema.graphql'),
  'utf-8'
);

export const schema = createSchema({
  typeDefs,
  resolvers,
});
