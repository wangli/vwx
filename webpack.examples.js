const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        example: "./examples/index.js",
        vendor: ['vue', 'vx']
    },
    output: {
        path: path.join(__dirname, "dist"),//输出路径
        filename: "[name].js"//输出文件名
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                },
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'vue-html-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            vue: path.resolve(__dirname, './dist/js/vue.js'),
            vx: path.resolve(__dirname, './src/index.js')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './examples/index.tpl',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }), 
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].js',
        })
    ]
}