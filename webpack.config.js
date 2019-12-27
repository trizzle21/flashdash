const path = require('path');
const webpack = require('webpack');

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
          }
      ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
