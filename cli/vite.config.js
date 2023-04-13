import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';
import relay from 'vite-plugin-relay';
// import dts from 'vite-plugin-dts';

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
    // relay,
    // dts({
    //   insertTypesEntry: true,
    // }),
    // relay,
  ],
  // appType:
  // build: {
  //   rollupOptions: {
  //   },
  // },
  build: {
    // lib: {
    //   entry: path.resolve(__dirname, 'src/index.tsx'),
    //   // name: 'MyLib',
    //   formats: ['es' /*, 'umd'*/],
    //   // fileName: (format) => `my-lib.${format}.js`,
    // },
    rollupOptions: {
      input: './src/index.tsx',
      output: {
        manualChunks: {},
      },
      // external: ['react'],
      // output: {
      //   globals: {
      //     react: 'React',
      //     // 'react-dom': 'ReactDOM',
      //     // 'styled-components': 'styled',
      //   },
      // },
    },
  },
});
