const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./config.js");
const base = require('./webpack.base.config.js');
const path = require('path');
module.exports = webpackMerge(base, {
    mode:"development",
    output: {
        filename: '[name].bundle.js',
        publicPath:"/"
    },
    devServer: {
        hot: true,
        host: 'localhost',
        port: 8080,
        open:true,
        inline:true
    },
    module: {
        rules: [

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }

        ]
    },
    plugins:[
        //确保输出资源不包含错误
        new webpack.NoEmitOnErrorsPlugin(),
        // 模块热替换插件
        new webpack.HotModuleReplacementPlugin(),
        //当开启hmr时，显示模块的相对路径
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,"..","public/index.html"),
            inject:true,
            filename:"index.html"
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, "..", "public"),
            ignore: ['.*', 'index.html']
        }]),
    ]
});