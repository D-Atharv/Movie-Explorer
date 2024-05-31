const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
    // Entry point for your application
    entry: './src/index.js',

    // Output configuration
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    // Module rules
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },

    // Resolve configuration
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            config: path.resolve(__dirname, 'src/config/'),
        },
    },

    // DevServer configuration
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.REACT_APP_RAPIDAPI_KEY': JSON.stringify(process.env.REACT_APP_RAPIDAPI_KEY),
            'process.env.REACT_APP_RAPIDAPI_HOST': JSON.stringify(process.env.REACT_APP_RAPIDAPI_HOST),
        })
    ]
};
