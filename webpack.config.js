const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  module: {
      rules: [
          {
            test: /\.s[ac]ss$/i,
            exclude: /node_modules/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { 
                  modules: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  implementation: require('sass')
                },
              }
            ],
          },
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                  presets: [   
                    "@babel/preset-env",
                    "@babel/preset-react"
                  ],
                  plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
            }
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader',
            ],
          },
      ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "Development"
    })
  ],
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true
  }
};
