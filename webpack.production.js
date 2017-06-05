const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.cssLoaders = function() {
  return {
    externals:{
      'config': JSON.stringify({ coreAPIHost: "http://data-royale-api.voslei.com" })
    },
    module: {
      loaders: [
        {
          test: /(\.scss|\.css)$/,
          include: [/bootstrap/, /node_modules/],
          loader: ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader?sourceMap'),
        },
        {
          test: /(\.scss|\.css)$/,
          exclude: [/node_modules/, /bootstrap/],
          loader:  ExtractTextPlugin.extract('css-loader?sourceMap&modules&importLoaders=2!sass-loader?sourceMap'),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin("bundle.css"),
    ],
  };
};
