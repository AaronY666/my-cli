const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const base = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path')

module.exports = merge({
        mode: 'production',
        entry: {
            main: path.resolve(__dirname, "../webpack-prod.js")
        },
        output: {
            filename: '[name]_[hash].js'
        },
        module: {
            rules: []
        },
        plugins: [
            new CleanWebpackPlugin()
        ],
        optimization: {
            usedExports: true,
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    cache: true,
                    terserOptions: {
                        compress: {
                            drop_console: true,
                            drop_debugger: true
                        },
                        ie8: true
                    }
                }),
            ],
            splitChunks: {
                cacheGroups: {
                    common: {
                        chunks: 'all',
                        name: 'common',
                        minChunks: 2,
                        reuseExistingChunk: true
                    }
                }
            }
        }
    },
    base
);