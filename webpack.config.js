const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './src/index.jsx',
    output: {
        filename: '[name].js',
        path: __dirname + '/build'
    },
    resolve: {
        extensions: ['.js','.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.(png)$/,
                use: 'file-loader'
            },
            {
                test: /\.(css)$/,
                use: [
                    {loader: "style-loader"},
                    {
                        loader:"css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        }
                    }
                ]
            },

        ]
    },
    plugins : [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}