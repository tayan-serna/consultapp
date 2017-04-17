'use strict';
var path = require('path'),
    webpack = require('webpack'),
    nodeModulesDir = path.resolve(__dirname, './node_modules');

//console.log('__dirname');
//console.log(__dirname);
var config = {
    context: __dirname,
    entry: {
        app : path.resolve(__dirname, "app/app.js"),
        vendors : [
            'angular-ui-router',
            'angular-ui-grid'
        ]
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].bundle.js",
        publicPath: 'dist/'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [nodeModulesDir],
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.png/,
                loader: 'url?mimetype=image/png'
            },
            {
                test: /\.jpg/,
                loader: 'file-loader'
            },
            {
                test: /[\/]angular\.js$/,
                loader: "exports?angular"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    ],
    externals: {
        "angular": "angular"
    }
};

module.exports = config;
