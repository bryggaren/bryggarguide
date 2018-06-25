const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const values = require('postcss-modules-values');
const { CheckerPlugin } = require('awesome-typescript-loader');

const config = {
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [path.resolve(__dirname), 'node_modules', 'src'],
    },

    entry: 'app/App.tsx',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        pathinfo: true,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre',
            },
            {
                test: /\.css$/,
                include: [path.resolve('./src/app')],
                loaders: [
                    'style-loader',
                    //'typings-for-css-modules-loader?modules&namedExport',
                    'css-loader?modules&namedExport&importLoaders=2&localIdentName=[local]___[hash:base64:5]',
                    'postcss-loader',
                ],
            },
            {
                enforce: 'pre',
                include: path.resolve('./src/app'),
                test: /\.tsx?$/,
                loader: 'tslint-loader',
                options: {
                    configFile: 'tslint.json',
                },
            },
            {
                test: /\.tsx?$/,
                include: [path.resolve('./src/app'), path.resolve('./node_modules')],
                loader: 'awesome-typescript-loader',
            },
            /*{
                test: /\.jsx$/,
                loader: 'babel-loader'
            },*/
            {
                test: /\.json$/,
                exclude: path.resolve('./src/assets'),
                loader: 'json-loader',
            },
            {
                test: /\.eot(\?.*)?$/,
                loader: 'file-loader?name=assets/fonts/[hash].[ext]',
            },
            {
                test: /\.(woff|woff2)(\?.*)?$/,
                loader: 'file-loader?name=assets/fonts/[hash].[ext]',
            },
            {
                test: /\.ttf(\?.*)?$/,
                loader:
                    'url-loader?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[hash].[ext]',
            },
            {
                test: /\.svg(\?.*)?$/,
                loader:
                    'url-loader?limit=10000&mimetype=image/svg+xml&name=assets/fonts/[hash].[ext]',
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url-loader?limit=1000&name=assets/images/[hash].[ext]',
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            filename: 'index.html',
        }),
        new CopyWebpackPlugin([
            //{ from: 'src/assets/languages/', to: 'assets/languages/' }
        ]),
        new CheckerPlugin(),
    ],
};

module.exports = config;
