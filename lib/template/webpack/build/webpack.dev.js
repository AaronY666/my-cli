const base = require('./webpack.base');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const template = path.resolve(__dirname, '../webpack-temp.html');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge({
        mode: 'development',
        module: {},
        entry: {
            main: path.resolve(__dirname, '../webpack-dev.js')
        },
        output: {
            filename: '[name].js',
            chunkFilename: '[name].js'
        },

        devtool: 'source-map',
        devServer: {
            port: '8888',
            host: 'localhost',
            // contentBase: '../dist',
            contentBase: path.join(__dirname, '../src'),
            open: true,
            hot: true

        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template,
                filename: 'index.html'
            })

        ],
    },
    base
);