module.exports = {
  devServer: {
    static: "./public",
    port: 3000,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
    //   {
    //     test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    //     use: [
    //       {
    //         loader: "file-loader",
    //         options: {
    //           name: "[name].[ext]",
    //           outputPath: "fonts/",
    //         },
    //       },
    //     ],
    //   },
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
          "style-loader",
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
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          "style-loader",
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
};
