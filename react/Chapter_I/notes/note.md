Para inicializar qualquer projeto, é necessário inicializar o repositório package.json

yarn init -y

OU

npm init -y

Depois instalamos a biblioteca:
yarn add react

Entrar no arquivo json, ficará:
  "dependencies": {
    "react": "^17.0.2" // E aqui vai sendo adicionando todas as dependências que formos instalando
}

depois instalamos o react dom:
yarn add react-dom

instalar o babel:
yarn add @babel/core @babel/cli @babel/preset-env -D

Cria-se um arquivo babel.config.js

Dentro deste arquivo colocamos:

module.exports = {
    presets: [
        '@babel/preset-env'
    ]
};

Instalar o presets:
yarn add @babel/preset-react -D

module.exports = {
    presets: [
        '@babel/preset-env'
        '@babel/preset-react'
    ]
};

instalar o webpack:
yarn add webpack webpack-cli webpack-dev-server -D

criamos um arquivo de configuração chamado "webpack.config.js"

const path = require('path') // colocamos para que seja alterado conforme o sistema operacional

module.exports = {
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
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader' // instalar a dependencia yarn add babel-loader -D
            }
        ]
    }

};

Verificar se está funcionando, fazendo teste:
Criar arquivo App.jsx dentro de src
No arquivo colocar:
export function App() {
    return <h1>Hello World!</h1>
}

no index, importar o app:
import { App } from './App'
Deleta a função!

Dentro do arquivo index.html é inserido somente uma div que é de onde o react trabalhará para execução do projeto:
<div id="root"></div>

Criando a renderização no index.jsx:

import React from 'react'; // para não precisarmos importado todo o react, temos outra maneira de fazer isto
import { render } from 'react-dom';
import { App } from './App';

render(<h1>Test</h1>, document.getElementById('root'));

Para podermos executar o que fizemos até agora, temos que executar o yarn webpack novamente

No index HTML, criamos a importação do script:
<script src='../dist/bundle.js'></script>

a partir da versão 17 do react:
no index.jsx deletamos então o "import React from 'react';"
no babel.config.js alteramos o preset do babel para:
        ['@babel/preset-react', {
            runtime: 'automatic'
        }]
        
Feito estas config, podemos alterar o index.jsx de comando de HTML <h1> que criamos, para a function que criamos.

render(<App />, document.getElementById('root'));

Dica: dentro do webpack.config.js podemos alterar o mode para "development" para a aplicação rodar mais rápido
dentro do module.exports colocar o mode: 'development'
