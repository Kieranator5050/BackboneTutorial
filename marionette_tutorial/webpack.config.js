var webpack = require('webpack');

module.exports = {
  entry: './app/driver',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-template-loader'
      }
    ]
  },
  output: {
    path: __dirname + '/static/js',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'handlebars'
    })
  ],
  resolve: {
    modules: [__dirname + '/node_modules', __dirname + '/app']
  },
  resolveLoader: {
    modules: [__dirname + '/node_modules']
  }
};