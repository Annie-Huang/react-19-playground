import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
// https://stackoverflow.com/questions/75746767/is-there-any-bundle-analyzer-for-vite
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    visualizer({
      template: 'treemap', // or sunburst
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: 'analyse.html', // will be saved in project's root
    }),
  ],
});
