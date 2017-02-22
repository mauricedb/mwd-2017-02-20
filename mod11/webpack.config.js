const webpack = require('webpack');

module.exports = {
  entry: {
    demo: "./src/demo.js",
    vendor: ["react", "react-dom"],
  },
  output: {
    filename: "./build/[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    })
  ]
};
