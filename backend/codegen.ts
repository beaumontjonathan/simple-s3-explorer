import type { CodegenConfig } from '@graphql-codegen/cli';
import type { TypeScriptPluginConfig } from '@graphql-codegen/typescript';
import type { TypeScriptResolversPluginConfig } from '@graphql-codegen/typescript-resolvers';

const tsPluginConfig: TypeScriptPluginConfig = {
  avoidOptionals: true,
};

const tsResolversPluginConfig: TypeScriptResolversPluginConfig = {
  defaultMapper: 'unknown',
  mapperTypeSuffix: 'GraphQL',
  mappers: {
    Bucket: '../schema/types#Bucket',
    ListedBucket: '../schema/types#ListedBucket',
    BucketObject: '../schema/types#BucketObject',
    ListedBucketObject: '../schema/types#ListedBucketObject',
  },
};

const config: CodegenConfig = {
  overwrite: true,
  schema: '../schema.graphql',
  generates: {
    'src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        ...tsPluginConfig,
        ...tsResolversPluginConfig,
      },
    },
  },
};

export default config;
