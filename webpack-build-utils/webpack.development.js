const path = require("path");

require("dotenv").config();

module.exports = {
    mode: "development",
    devtool: "source-map",
    devServer: {
        host: "0.0.0.0",
        hot: true,
        allowedHosts: "all",
        historyApiFallback: {
            disableRoot: true,
        },
        port: 5050,
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                            modules: true,
                        },
                    },
                    // "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
                include: /\.module\.css$/,
            },
            {
                test: /\.(css|scss|sass)/i,
                use: [
                    "style-loader",
                    "css-loader",
                    // "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
                exclude: /\.module\.css$/,
            },
        ],
    },
};
