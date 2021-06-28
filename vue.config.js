const path = require('path');
const px2rem = require('postcss-px2rem');
const htmlConfig = require('./package.json');

const postcss = px2rem({
  remUnit: 32,
});

module.exports = {
  lintOnSave: true,
  devServer: {
    hot: true,
    open: true,
    port: 8002,
    host: '0.0.0.0',
  },
  css: {
    // extract: true, // 生产环境打开
    loaderOptions: {
      postcss: {
        plugins: [postcss],
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        comps: path.join(__dirname, 'src/components'),
      },
    },
  },
  chainWebpack(config) {
    config.plugin('html').tap((args) => {
      args[0].title = `大屏看板 v${htmlConfig.version}`;
      return args;
    });
  },
};
