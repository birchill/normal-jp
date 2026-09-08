import { defineConfig } from 'tsdown';

export default defineConfig({
  clean: true,
  dts: { generator: 'oxc' },
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  fixedExtension: false,
  sourcemap: true,
});
