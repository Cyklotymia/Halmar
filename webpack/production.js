const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {

  optimization: {
    minimizer: [new OptimizeCssAssetsWebpackPlugin({})],
  },
  module: {
    rules: [
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //         outputPath: "fonts/",
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        loader: "file-loader",
        options: {
          name: "[name][contenthash:4].[ext]",
          outputPath: "images",
        },
      },
      {
        test: /\.module.s(a|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./",
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(s(a|c)ss|css)$/,
        exclude: /\.module.(s(s|c)ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins:[
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
          filename:'style.[contenthash:6].css',
         
      }),
  ],
};

