const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const pkg = require('./package.json');

module.exports = {
    entry: {
        vwx: "./src/dist.js"
    },
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: "[name].js"
    },
    externals: ['vue', 'vue-router'],
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
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("../css/[name].css"),
        new webpack.BannerPlugin("vwx.js v" + pkg.version + " \n(c) 2017-2018 wangli \nReleased under the MIT License."),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
}