const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const PurifyCSSPlugin = require("purifycss-webpack");
const glob = require("glob");
const base = require('./webpack.base.config');
const path = require('path');
module.exports = webpackMerge(base, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "..", "dist"),
        publicPath: "./",
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader']
            })
        }]
    },
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, "..", "dist"), {
            root: path.resolve(__dirname, "..", "/")
        }),
        new ExtractTextPlugin({
            filename: '[name].[chunkhash].css',
            allChunks: true,
        }),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.resolve(__dirname, "..",'public/*.html')),
            }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '..', 'public/index.html'),
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
            }
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, "..", "public"),
            ignore: ['.*', 'index.html']
        }]),
        new UglifyJsPlugin({
            include: /src/,
            exclude: /node_modules/,
            parallel: true,
            test: /\.js($|\?)/i
        })
    ]
})