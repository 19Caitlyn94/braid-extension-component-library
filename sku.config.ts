import type { SkuConfig } from 'sku';

const skuConfig: SkuConfig = {
  libraryEntry: 'src/library.js',
  libraryName: 'test-braid-extension',
  libraryFile: 'test-braid-extension',
  renderEntry: 'src/render.tsx',
  // publicPath: '/path/to/public/assets/', // <-- Required for sku build output
  // orderImports: true,
};

export default skuConfig;
