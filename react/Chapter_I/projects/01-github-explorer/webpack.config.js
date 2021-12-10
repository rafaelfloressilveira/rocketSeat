const path = require('path') // colocamos para que seja alterado conforme o sistema operacional

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'dist'), // config saida
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/, // importo o arquivo jsx
                exclude: /node_modules/,
                use: 'babel-loader' // converto o arquivo com babel
            }
        ],
    }

};