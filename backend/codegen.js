'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const tsPluginConfig = {
  avoidOptionals: true,
};
const tsResolversPluginConfig = {
  defaultMapper: 'unknown',
  mapperTypeSuffix: 'GraphQL',
  mappers: {
    Bucket: '../schema/types#Bucket',
    ListedBucket: '../schema/types#ListedBucket',
    BucketObject: '../schema/types#BucketObject',
    ListedBucketObject: '../schema/types#ListedBucketObject',
    BucketObjectTag: '../schema/types#BucketObjectTag',
    BucketObjectMetadataItem: '../schema/types#BucketObjectMetadataItem',
    BucketCommonPrefix: '../schema/types#BucketCommonPrefix',
    BucketPrefix: '../schema/types#BucketPrefix',
  },
};
const config = {
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
exports.default = config;
