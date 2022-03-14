const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.js', '.json', '.wasm'],
    },
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),

        filename: './bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            path: path.resolve(__dirname, 'src'),
            template: './index.html'
        }),

        new CleanWebpackPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                use: 'file-loader',
            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    

    devServer: {
        port: 3000
    }
}