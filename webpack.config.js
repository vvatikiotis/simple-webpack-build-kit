var webpack = require('webpack');
var	path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
	debug: true,
	devtool: 'source-map',
	context: path.resolve('./src'),
	entry: [
		// 'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		'./startup',
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	output: {
		path: path.resolve('/build'),
		filename: 'bundle.js',
	},
	module: {
		preLoaders: [{
			test: /\.js$/,
			exclude: /(node_modules|build)/,
			loader: 'eslint',
		}],

		loaders: [{
			test: /\.less$/,
			exclude: /(node_modules|build)/,
			loaders: [
				'style-loader',
				'css-loader',
				'autoprefixer?browsers=last 2 versions', // maybe 1 line up
				'less-loader',
			],
		}, {
			test: /\.scss$/,
			exclude: /(node_modules|build)/,
			loaders: [
				'style',
				'css',
				'autoprefixer?browsers=last 2 versions',
				'sass-loader',
			],
		}, {
			test: /\.(svg|woff2|woff|ttf|eot)$/i,
			loaders: [
				'file-loader',
			],
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=8192',
		}, {
			test: /\.(jsx|js)?$/,
			exclude: /(node_modules|build)/,
			loader: 'babel-loader',
		}],
	},

	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new HtmlwebpackPlugin({
			title: 'React',
			template: 'tmpl.html',
			inject: 'body',
		}),
	],
};
