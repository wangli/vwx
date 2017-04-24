var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        vendor: ['vue', 'vx']
    },
    output: {
        path: path.join(__dirname, "dist", "js/dll"),
        filename: "[name].js",
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "dist", "js/dll", "manifest.json"),
            name: "[name]",
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    resolve: {
        alias: {
            vue: path.resolve(__dirname, './dist/js/vue.js'),
            vx: path.resolve(__dirname, './dist/js/vx.js')
        }
    }
};
