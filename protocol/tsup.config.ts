import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    outDir: 'dist',
    format: ['cjs', 'esm'],
  },
  {
    entry: ['src/**/*.ts'],
    outDir: 'dist',
    format: 'esm',
    dts: {
      only: true,
    },
    tsconfig: './tsconfig.json',
  },
]);
