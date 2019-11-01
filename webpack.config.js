const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const path = require('path');


module.exports = {
  entry: {
    main: [
      './src',
      './styles/global.scss'
    ]
  },
  output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
    },
  optimization: {
   runtimeChunk: 'single',
 },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false, sourceMap: devMode ? true : false } },
          "postcss-loader",
          {
            loader: "sass-loader", options: {
              sourceMap: devMode ? true : false
            }
          }
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ['file-loader?name=[name].[ext]']
      }
    ]
  },
  devtool: devMode ? 'module-source-map' : 'source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      title: "Caching"
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
     allChunks: true
   }),
   new ManifestPlugin()
  ]
};
