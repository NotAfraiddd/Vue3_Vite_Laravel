import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath, URL } from 'url';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/src/app.ts'],
      refresh: true,
    }),
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./resources/js/src', import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
  build: {
    outDir: 'public/build',
  },
});
