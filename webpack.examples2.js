const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const SyntaxDynamicImport = require("babel-plugin-syntax-dynamic-import");
module.exports = {
    entry: {
        example: "./examples/App.js",
        vendor: ['vue', 'vue-router', 'vwx']
    },
    output: {
        path: path.join(__dirname, "dist/examples"),//输出路径
        filename: "[name].js"//输出文件名
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015'],
                    plugins: ['syntax-dynamic-import']
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
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]'
            }
        ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        vwx: path.resolve(__dirname, './src/index.js'),
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
      historyApiFallback: true,
      noInfo: true,
      host: "192.168.1.120",
      port: 8080,
      publicPath: '/'
    },
    performance: {
      hints: false
    },
    devtool: '#eval-source-map',    
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
        new ExtractTextPlugin("[name].css")
    ]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
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
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ])
  }
  