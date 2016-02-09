// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var cssnano = require('cssnano');

var globals = {
  'React': 'react',
  'ReactDOM': 'react-dom',
  'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
};

module.exports = {
  debug: true,
  devtool: '#source-map',

  context: path.resolve('./src'),
  entry: [
    './main',
  ],

  resolve: {
    // root: 'src',
    extensions: ['', '.js', '.jsx'],
  },

  output: {
    path: path.resolve('./src'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      // template: path.resolve('./src/index.html'),
      template: './index.html',
      hash: false,
      // favicon: 'static/favicon.ico',
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new webpack.ProvidePlugin(globals),
  ],

  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_module/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_module/,
        loaders: [
          'style-loader',
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_module/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap',
          'postcss-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      /* eslint-disable */
      { test: /\.woff(\?.*)?$/,  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
      { test: /\.ttf(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
      { test: /\.svg(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
      { test: /\.(png|jpg)$/,    loader: 'url?limit=8192' }
      /* eslint-enable */
    ],
  },

  postcss: [
    cssnano({
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions'],
      },
      safe: true,
      discardComments: {
        removeAll: true,
      },
    }),
  ],
};
