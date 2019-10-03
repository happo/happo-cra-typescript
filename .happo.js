const craWebpackConfig = require('react-scripts/config/webpack.config')

module.exports = {
  customizeWebpackConfig: config => {
    // Use the built-in webpack config provided by create-react-app
    config.module = craWebpackConfig('development').module;
    return config;
  },
};
