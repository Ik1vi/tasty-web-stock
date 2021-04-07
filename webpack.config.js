const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: false,
    },
    
    entry: {
        index: path.resolve(__dirname, "src", "index.js")
    },

    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: ''
    },

    resolve: {
        fallback: {
          util: require.resolve("util/")
        }
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"],
                    }
                },
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
            }
        ]
    },

    plugins: [
        new Dotenv(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            favicon: "./src/favicon.png",
            template: path.resolve(__dirname, "src", "index.html")
        }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                    ['gifsicle', { interlaced: true }],
                    ['jpegtran', { progressive: true }],
                    ['optipng', { optimizationLevel: 5 }],
                    [
                        'svgo',
                        {
                            plugins: [
                                {
                                    removeViewBox: false,
                                },
                            ],
                        },
                    ],
                ],
            },
        }),
    ]
};