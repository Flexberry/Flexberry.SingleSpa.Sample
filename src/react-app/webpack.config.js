const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
var webpack = require('webpack');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "app",
    projectName: "react-app",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    plugins: [
      new webpack.DefinePlugin({
        process: { env: {} }
      })
    ]
    // modify the webpack config however you'd like to by adding to this object
  });
};
