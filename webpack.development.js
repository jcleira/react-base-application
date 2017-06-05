exports.devServer = function({ host, port }) {
  return {
    devServer: {
      historyApiFallback: true,
      stats: 'errors-only',
      host,
      port,
      overlay: {
        errors: true,
        warnings: true,
      },
    },
  };
};

exports.configuration = function() {
  return {
    externals:{
      'config': JSON.stringify({ coreAPIHost: "http://localhost:3000" })
    }
  }
}

exports.cssLoaders = function() {
  return {
    module: {
      loaders: [
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
      ],
    },
  };
};

exports.linting = function () {
  return {
    module: {
      loaders: [
        {
          test: /\.js?/,
          enforce: 'pre',
          loader: 'eslint-loader',
          options: {
            emitWarning: true,
          }
        },
        {
          test: /\.s(a|c)ss$/,
          enforce: 'pre',
          loader: 'stylelint-loader'
        },
      ],
    },
  };
}
