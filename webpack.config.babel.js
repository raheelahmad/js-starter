// @flow

import path from 'path'

import { WDS_PORT } from './src/shared/config'
import { isProduction } from './src/shared/util'

export default {
  entry: [
    './src/client'
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: isProduction ? '/static/' : `http://localhost:${WDS_PORT}/dist/`
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devtool: isProduction ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: WDS_PORT
  }
}
