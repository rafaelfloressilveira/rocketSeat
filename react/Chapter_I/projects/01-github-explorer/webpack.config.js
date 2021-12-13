const path = require('path') // colocamos para que seja alterado conforme o sistema operacional
const HtmlWebpackPlugin = require ('html-webpack-plugin') // importar plugin webpack

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'dist'), // config saida
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devServer: {
        static: path.resolve(__dirname, 'public'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],

    module: {
        rules: [
            {
                test: /\.jsx$/, // importo o arquivo jsx
                exclude: /node_modules/,
                use: 'babel-loader' // converto o arquivo com babel
            },
            {
                test: /\.scss$/, // importo o arquivo css
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'], // converto o arquivo com style e css loader
            }
        ],
    }

}