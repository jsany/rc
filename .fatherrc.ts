export default {
  esm: 'babel',
  cjs: 'babel',
  runtimeHelpers: true,
  lessInBabelMode: true,
  extractCSS: true,
  extraBabelPlugins: [
    ['transform-remove-console', { exclude: ['error', 'warn', 'info'] }],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@': './src',
          '@@': 'src/.umi',
        },
      },
    ],
  ],
};
