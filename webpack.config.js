var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    context: __dirname + '/src',
    entry: './startup',
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

        loaders: [{
            test: /\.(jsx|js)?$/,
            exclude: /(node_modules|bower_components|build)/,
            loader: 'babel'
        }, {
            test: /\.scss$/,
            exclude: /(node_modules|bower_components|build)/,
            loader: 'style!css!sass'
        }]
    },

    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['build'] }
        }),
        new HtmlwebpackPlugin({
            title: 'React',
            template: 'tmpl.html',
            inject: 'body'
        })
    ]
};
