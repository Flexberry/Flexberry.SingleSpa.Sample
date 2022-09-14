  
  const { merge } = require("webpack-merge");
  const singleSpaDefaults = require("webpack-config-single-spa-react");
  var webpack = require('webpack');
  const path = require('path');

  module.exports = (webpackConfigEnv, argv) => {
    const defaultConfig = singleSpaDefaults({
      orgName: "app",
      projectName: "react-odata-app",
      webpackConfigEnv,
      argv,
    });
  
    return merge(defaultConfig, {
      plugins: [
        new webpack.DefinePlugin({
          process: { env: {} }
        })
      ],
      entry: './src/index.tsx',

      devtool: 'inline-source-map',
       module: {
         rules: [
           {
             test: /\.tsx?$/,
             use: 'ts-loader',
             exclude: /node_modules/,
           },
         ],
       },
       resolve: {
         extensions: [ '.tsx', '.ts', '.js' ],
       },
       output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'dist'),
       }
    });
  };

  


