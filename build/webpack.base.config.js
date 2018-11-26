const path = require('path');
const config = require('./config.js');
module.exports = {
    entry: path.resolve(__dirname, "..", "src/index.js"),
    output: {
        filename: '[name].js'
    },
    externals: {},
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|json)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: 'images/[name].[hash:7].[ext]',
                    }
                }]
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                            /* your options here */
                        }
                    }
                ]
            }
        ]
    },
    plugins: [

    ]
}