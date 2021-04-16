const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (webpackEnv) => {
    return {
        mode: 'development',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.js', 'jsx']
        },
        module: {
            rules: [
                {
                    test: /\.(mjs|js|jsx)$/,
                    include: /src/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                scriptLoading: 'defer',
                title: 'Webpack Demo',
                template: 'template.html'
            })
        ]

    }
}
