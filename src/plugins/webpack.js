const path = require('path');

function webpackConfigurePlugin(context, options) {
  return {
    name: 'docusaurus-webpack-plugin',
    configureWebpack(config, isServer, utils, content) {
      return {
        resolve: {
          alias: {
            '@lemma': path.resolve(__dirname, '../data/lemma'),
          },
        },
      };
    }
  }
}

module.exports = webpackConfigurePlugin;
