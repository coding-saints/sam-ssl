const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const PATHS = {
  app: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist")
};

module.exports = {
  devtool: "source-map",
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.dist,
    filename: "[name].js"
  },
   devServer: {
       open: true,
       compress: true,
       historyApiFallback: true
   },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",

          // Could also be write as follow:
          // use: 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
          use: [
            {
              loader: "css-loader",
              query: {
                modules: true,
                localIdentName: "[name]__[local]___[hash:base64:5]"
              }
            },
            "postcss-loader"
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg|ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              // path where the images will be saved
              name: "assets/[name].[ext]",
            }
          },
/*
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                quality: 65
              },
              pngquant: {
                quality: "10-20",
                speed: 4
              },
              svgo: {
                plugins: [
                  {
                    removeViewBox: false
                  },
                  {
                    removeEmptyAttrs: false
                  }
                ]
              },
              gifsicle: {
                optimizationLevel: 7,
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7,
                interlaced: false
              }
            }
          }
          */
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/public", "index.html"),
      favicon: "src/public/assets/favicon.png"
    }),

    new ExtractTextPlugin({
      filename: "[name].css",
      disable: false,
      allChunks: true
    }),
    // new UglifyJSPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};
