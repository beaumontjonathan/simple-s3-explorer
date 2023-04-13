// vite.config.js
import react from 'file:///Users/jonathan.beaumont/Personal/Code/simple-s3-exporer/node_modules/.pnpm/@vitejs+plugin-react-swc@3.2.0_vite@4.2.1/node_modules/@vitejs/plugin-react-swc/index.mjs';
import path from 'node:path';
import { defineConfig } from 'file:///Users/jonathan.beaumont/Personal/Code/simple-s3-exporer/node_modules/.pnpm/vite@4.2.1_@types+node@18.15.9/node_modules/vite/dist/node/index.js';
import relay from 'file:///Users/jonathan.beaumont/Personal/Code/simple-s3-exporer/node_modules/.pnpm/vite-plugin-relay@2.0.0_ejrscabtakr5epbta75ef3qkx4/node_modules/vite-plugin-relay/dist/plugin.js';
var __vite_injected_original_dirname =
  '/Users/jonathan.beaumont/Personal/Code/simple-s3-exporer/cli';
var vite_config_default = defineConfig({
  plugins: [
    react({
      plugins: [
        [
          '@swc/plugin-relay',
          {
            language: 'typescript',
            schema: path.resolve(
              __vite_injected_original_dirname,
              '..',
              'graphql-server',
              'schema.graphql'
            ),
            rootDir: __vite_injected_original_dirname,
            src: 'src',
            eagerEsModules: true,
            artifactDirectory: path.resolve(
              __vite_injected_original_dirname,
              'src',
              '__generated__'
            ),
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
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvam9uYXRoYW4uYmVhdW1vbnQvUGVyc29uYWwvQ29kZS9zaW1wbGUtczMtZXhwb3Jlci9jbGlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9qb25hdGhhbi5iZWF1bW9udC9QZXJzb25hbC9Db2RlL3NpbXBsZS1zMy1leHBvcmVyL2NsaS92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvam9uYXRoYW4uYmVhdW1vbnQvUGVyc29uYWwvQ29kZS9zaW1wbGUtczMtZXhwb3Jlci9jbGkvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWxheSBmcm9tICd2aXRlLXBsdWdpbi1yZWxheSc7XG4vLyBpbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCh7XG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAnQHN3Yy9wbHVnaW4tcmVsYXknLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhbmd1YWdlOiAndHlwZXNjcmlwdCcsXG4gICAgICAgICAgICBzY2hlbWE6IHBhdGgucmVzb2x2ZShcbiAgICAgICAgICAgICAgX19kaXJuYW1lLFxuICAgICAgICAgICAgICAnLi4nLFxuICAgICAgICAgICAgICAnZ3JhcGhxbC1zZXJ2ZXInLFxuICAgICAgICAgICAgICAnc2NoZW1hLmdyYXBocWwnXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcm9vdERpcjogX19kaXJuYW1lLFxuICAgICAgICAgICAgc3JjOiAnc3JjJyxcbiAgICAgICAgICAgIGVhZ2VyRXNNb2R1bGVzOiB0cnVlLFxuICAgICAgICAgICAgYXJ0aWZhY3REaXJlY3Rvcnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnLCAnX19nZW5lcmF0ZWRfXycpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgIH0pLFxuICAgIC8vIHJlbGF5LFxuICAgIC8vIGR0cyh7XG4gICAgLy8gICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgIC8vIH0pLFxuICAgIC8vIHJlbGF5LFxuICBdLFxuICAvLyBhcHBUeXBlOlxuICAvLyBidWlsZDoge1xuICAvLyAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgLy8gICB9LFxuICAvLyB9LFxuICBidWlsZDoge1xuICAgIC8vIGxpYjoge1xuICAgIC8vICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHN4JyksXG4gICAgLy8gICAvLyBuYW1lOiAnTXlMaWInLFxuICAgIC8vICAgZm9ybWF0czogWydlcycgLyosICd1bWQnKi9dLFxuICAgIC8vICAgLy8gZmlsZU5hbWU6IChmb3JtYXQpID0+IGBteS1saWIuJHtmb3JtYXR9LmpzYCxcbiAgICAvLyB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiAnLi9zcmMvaW5kZXgudHN4JyxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHt9LFxuICAgICAgfSxcbiAgICAgIC8vIGV4dGVybmFsOiBbJ3JlYWN0J10sXG4gICAgICAvLyBvdXRwdXQ6IHtcbiAgICAgIC8vICAgZ2xvYmFsczoge1xuICAgICAgLy8gICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgLy8gICAgIC8vICdyZWFjdC1kb20nOiAnUmVhY3RET00nLFxuICAgICAgLy8gICAgIC8vICdzdHlsZWQtY29tcG9uZW50cyc6ICdzdHlsZWQnLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNXLE9BQU8sV0FBVztBQUN4WCxPQUFPLFVBQVU7QUFDakIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBSGxCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxZQUNFLFVBQVU7QUFBQSxZQUNWLFFBQVEsS0FBSztBQUFBLGNBQ1g7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxTQUFTO0FBQUEsWUFDVCxLQUFLO0FBQUEsWUFDTCxnQkFBZ0I7QUFBQSxZQUNoQixtQkFBbUIsS0FBSyxRQUFRLGtDQUFXLE9BQU8sZUFBZTtBQUFBLFVBQ25FO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU9MLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxRQUNOLGNBQWMsQ0FBQztBQUFBLE1BQ2pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBU0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
