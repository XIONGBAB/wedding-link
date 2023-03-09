const os = require("os");
const path = require("path");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const threads = os.cpus().length;
module.exports = {
    entry: {
        wdpage: "./src/js/wdpage.js",
        main: "./src/js/main.js",
    },
    output: { path: undefined, filename: "static/js/[name].[contenthash:8].js" },
    module: {
        rules: [
            {
                oneOf: [
                    { test: /\.css$/, use: ["style-loader", "css-loader"] },
                    { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
                    { test: /\.s[ac]ss$/, use: ["style-loader", "css-loader", "sass-loader"] },
                    { test: /\.styl$/, use: ["style-loader", "css-loader", "stylus-loader"] },
                    { test: /\.(png|jpe?g|gif|webp|svg)$/, type: "asset", parser: { dataUrlCondition: { maxSize: 10 * 1024 } }, generator: { filename: "static/images/[hash:8][ext][query]" } },
                    { test: /\.(ttf|woff2?|map4|map3|avi)$/, type: "asset/resource", generator: { filename: "static/media/[hash:8][ext][query]" } },
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: [
                            { loader: "thread-loader", options: { workers: threads } },
                            { loader: "babel-loader", options: { cacheDirectory: true, cacheCompression: false, plugins: ["@babel/plugin-transform-runtime"] } },
                        ],
                    },
                    {
                        test: /\.(htm|html)$/,
                        loader: "html-withimg-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new ESLintWebpackPlugin({ context: path.resolve(__dirname, "../src"), exclude: "node_modules", cache: true, cacheLocation: path.resolve(__dirname, "../node_modules/.cache/.eslintcache"), threads }),
        new HtmlWebpackPlugin({
            title: "Wedding link",
            filename: "index.html",
            chunks: ["main"],
            template: path.resolve(__dirname, "../public/index.html"),
        }),
        new HtmlWebpackPlugin({
            title: "Wedding",
            filename: "wdpage.html",
            chunks: ["wdpage"],
            template: path.resolve(__dirname, "../public/wdpage.html"),
        }),
    ],
    devServer: {
        host: "localhost",
        port: "3000",
        open: true,
        hot: true,
    },
    mode: "development",
    devtool: "cheap-module-source-map",
};
