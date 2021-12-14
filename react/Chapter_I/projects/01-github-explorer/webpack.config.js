const path = require('path') // colocamos para que seja alterado conforme o sistema operacional
const HtmlWebpackPlugin = require ('html-webpack-plugin') // importar plugin webpack
const ReactRefreshWebpackPlugin = require ('@pmmmwh/react-refresh-webpack-plugin') // importar refresh

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'), // arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'dist'), // config saida
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', 'ts', 'tsx'],
    },

    devServer: {
        static: path.resolve(__dirname, 'public'),
        hot: true,
    },

    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),

    module: {
        rules: [
            {
                test: /\.(j|t)sx$/, // importo o arquivo jsx e tsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // converto o arquivo com babel
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
            },
        },
            {
                test: /\.scss$/, // importo o arquivo css
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'], // converto o arquivo com style e css loader
            }
        ],
    }

}