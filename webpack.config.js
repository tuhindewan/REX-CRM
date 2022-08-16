const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config.js");

module.exports = {
  ...defaultConfig,
  ...{
    mode: "development",
    entry: {
      index: "./admin/src/index.js",
    },
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "admin/asset/dist"),
    },
    externals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.css$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
          ],
        },
        {
          test: /\.js(x)*$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
  },
};
