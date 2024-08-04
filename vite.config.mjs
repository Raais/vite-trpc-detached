import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import pattycake from 'pattycake';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), pattycake.vite()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  server: {
    port: 4334,
    host: '0.0.0.0'
  }
});
