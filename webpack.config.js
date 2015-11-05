var webpack = require('webpack'),
    path = require('path'),
    HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    debug: true,
    devtool: 'eval-source-map',
    context: __dirname + '/src',
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './startup'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [{
            test: /\.js$/, 
            exclude: /(node_modules|build)/,
            loader: "eslint"
        }],

        loaders: [
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components|build)/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 2 versions',
                    'sass'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=8192',
                    'img'
                ]
            },
            {
                test: /\.(jsx|js)?$/,
                exclude: /(node_modules|bower_components|build)/,
                loader: 'babel'
            }
        ]
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlwebpackPlugin({
            title: 'React',
            template: 'tmpl.html',
            inject: 'body'
        })
    ]
};
