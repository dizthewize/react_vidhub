const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + '/public',
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        },
     }, {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    historyApiFallback: true
  },
}
