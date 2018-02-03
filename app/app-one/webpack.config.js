const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/main.jsx",
  output: {
    path: __dirname + "/public/dist/",
    filename: "bundle.js",
    publicPath: "/dist"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new ExtractTextPlugin("styles-app-one.css")],
  devtool: "inline-source-map"
};
