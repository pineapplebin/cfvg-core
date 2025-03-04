import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/**/*.ts'],
    outDir: 'dist',
    format: 'esm',
    dts: true,
  },
  {
    entry: ['src/index.ts'],
    outDir: 'dist',
    format: 'cjs',
    dts: false,
  },
]);
