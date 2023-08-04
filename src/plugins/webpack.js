function webpackConfigurePlugin(context, options) {
  return {
    name: 'docusaurus-webpack-plugin',
    configureWebpack(config, isServer, utils, content) {
        config.devtool = 'source-map';
    }
  }
}

module.exports = webpackConfigurePlugin;