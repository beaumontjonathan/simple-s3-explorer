import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import relay from 'vite-plugin-relay';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), relay],
  server: {
    port: 5000,
  },
  preview: {
    port: 5000,
  },
});
