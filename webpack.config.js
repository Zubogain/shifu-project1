const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: "development",
    entry: './src/js/main.js',
    devtool: 'inline-source-map',

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "./"
    },

    devServer: {
        publicPath: "/",
        contentBase: './dist'
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: "./src/template.html"
        }),
        new CleanWebpackPlugin(['dist']),
        new VueLoaderPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    }
}