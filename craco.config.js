/* craco.config.js */
const webpack = require("webpack");
const path = require(`path`);

module.exports = {
  webpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    resolve: {
      fallback: {
        buffer: require.resolve("buffer"),
      },
    },
  },
};
