const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: "./demo.js",
  output: {
    filename: "demo.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ]
  },
   plugins: [
    new UglifyJSPlugin()
  ]
};
