const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = require('./webpack.development')
const production= require('./webpack.production')

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};


const commonConfig = {
  entry: {
    app: PATHS.app,
  },
  output : {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: PATHS.app,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options: {
            limit: 25000,
        },
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
            limit: 8192,
        },
      },
    ],
  },
}

const developmentConfig = merge([
  development.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),

  development.configuration(),
  development.cssLoaders(),
  development.linting(),
]);

const productionConfig = merge([
  production.cssLoaders(),
]);

module.exports = function(env){
  switch (env) {
    case "production":
      return merge(commonConfig, productionConfig);
    case "development":
      return merge(commonConfig, developmentConfig);
  }
}
