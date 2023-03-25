import { MutationResolvers } from '../generated/graphql';

export const Mutation: MutationResolvers = {
  never: () => {
    throw new Error('Never!');
  },
};
