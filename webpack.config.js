const path = require("path");
const autoprefixer = require('autoprefixer');
const Html = require('html-webpack-plugin');

const entryPath = "App";
const entryFile = "index.js";
const publicPath = "/Meme-generator/";


module.exports = {
    entry: `./${entryPath}/js/${entryFile}`,
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `${entryPath}/build`),
        publicPath: publicPath,
    },
    devServer: {
        contentBase: path.join(__dirname, `${entryPath}`),
        historyApiFallback: true,
        publicPath: "/build/",
        compress: true,
        port: 3001
    },
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    publicPath: publicPath + "assets/",
                    outputPath: "/assets/"
                }
            }
        ],
    },
    plugins: [
        new Html({
            filename: "index.html",
            template: `${entryPath}/index.html`
        })
    ]
};
