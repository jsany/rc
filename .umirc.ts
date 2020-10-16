import { defineConfig } from 'dumi';
import { IConfig } from '@umijs/types';

// import {resolve} from 'path'
const config: IConfig = {
  // alias: {
  //   '@jsany/rc': resolve(__dirname, './src/index.ts')
  // },
  title: 'jsany-rc',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  publicPath: '/rc/',
  base: '/rc/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
};
export default defineConfig(config);
