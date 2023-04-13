import path from 'node:path';

export default {
  src: path.resolve(__dirname, 'src'),
  schema: path.resolve(__dirname, '..', 'schema.graphql'),
  artifactDirectory: path.resolve(__dirname, 'src', '__generated__'),
  language: 'typescript',
  exclude: ['**/node_modules/*', '**/__mocks__/*', '**/__generated__/*'],
  eagerEsModules: true,
};
