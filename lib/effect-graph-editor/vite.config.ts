import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import rollupPeerDepsExternal from 'rollup-plugin-peer-deps-external';
import viteDts from 'vite-plugin-dts';
import viteReact from '@vitejs/plugin-react';
import viteUnocss from 'unocss/vite';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
  plugins: [
    viteReact(),
    viteUnocss({ mode: 'global' }),
    viteDts({
      exclude: ['dev'],
    }),
  ],
  server: {
    port: 15170,
  },
  build: {
    emptyOutDir: true,
    cssMinify: true,
    minify: true,
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      plugins: [
        rollupPeerDepsExternal({
          includeDependencies: false,
        }),
      ],
    },
  },
});
