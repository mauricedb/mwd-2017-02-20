module.exports = {
  entry: "./src/demo.js",
  output: {
    filename: "./build/demo.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
