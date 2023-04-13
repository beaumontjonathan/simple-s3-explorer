import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      plugins: [
        [
          '@swc/plugin-relay',
          {
            language: 'typescript',
            schema: path.resolve(
              __dirname,
              '..',
              'graphql-server',
              'schema.graphql'
            ),
            rootDir: __dirname,
            src: 'src',
            eagerEsModules: true,
            artifactDirectory: path.resolve(__dirname, 'src', '__generated__'),
          },
        ],
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: './src/index.tsx',
      output: {
        manualChunks: {},
      },
    },
  },
});
