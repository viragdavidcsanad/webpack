const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()],
};
