var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [
    nodeExternals(),
    {
      'config': JSON.stringify({ coreAPIHost: "http://localhost:3000" })
    }
  ],
  module: {
    loaders: [
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /(\.scss|\.css)$/,
        include: [/bootstrap/, /react-select/],
        loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap',
      },
      {
        test: /(\.scss|\.css)$/,
        exclude: [/node_modules/, /bootstrap/, /react-select/],
        loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=2!sass-loader?sourceMap',
      },
      {
        test: /\.jsx?/,
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
};
