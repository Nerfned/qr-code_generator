import { URL, fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // base: "/projekte/qrcode/frontend/dist/",
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
