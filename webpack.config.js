const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        vx: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "dist/js"),//输出路径
        filename: "[name].js"//输出文件名
    },
    externals: ['vue'],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                },
                exclude: /node_modules/
            }, {
                test: /\.html$/,
                loader: 'vue-html-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
/*        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })*/
    ]
}