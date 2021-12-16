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

Para não termos que referenciar sempre os arquivos script. 
Vamos adicionar um plugin, antes deletamos o <script src='../dist/bundle.js'></script>
yarn add html-webpack-plugin -D

Dentro do webpack.config  colocamos a importação do plugin:
const HtmlWebpackPlugin = require ('html-webpack-plugin')

indicamos uma variável plugins dentro do mesmo arquivo:
plugins: [
       new HtmlWebpackPlugin({
       template: path.resolve(__dirname, "public", "index.html")
]

yarn webpack (salvar)

Será criado um arquivo index.html dentro da pasta dist

Automatizando o salvamento (yarn webpack):
instalar a bib: yarn add webpack-dev-server -D

dentro do webpack.config, criar outra propriedade dentro do objeto:
devServer: {
	contentBase: path.resolve(__dirname, 'public') // novas versões do webpack, trocar contentBase para static
},

executar yarn webpack serve

Agora, todas as "atualizações" feitas nos arquivos dentro da pasta src estarão sendo salvas instantaneamente ao salvar o próprio arquivo.
Para visualiza, utilizaremos a porta criada. Geralmente http://localhost:8080/

Source Maps 
Verificar o código "original" no console

depois do mode:
devtool: 'eval-source-map', // temos alguns modos, mas para ambiente de desenvolvimento escolhemos o eval-source-map

Criando um if para informar quando estamos em dev ou prd:
criamos uma variável: const isDevelopment = process.env.NODE_ENV !== 'production';

dentro do module alteramos:
module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    
No linux/Mac, no terminal colocamos: NODE_ENV=production yarn webpack // Ele ficará executando, podemos ficar com 2 terminais...
Para windows tem outra forma, se necessário procurar na internet.

Configurar importação de arquivos CSS

Cria um arquivo global.css dentro de styles, que fica dentro de src

No App.jsx importamos o CSS:
import './styles/global.css';

Instalamos o
yarn add node-sass -D
yarn add style-loader css-loader -D

no webpack.config, iremos adicionar uma nova rule:
                {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
                }

Não é item obrigatório, mas o CSS pode ser feito por um pré-processador, o mais famoso o Sass
Instalando o Sass
yarn add sass-loader -D

adicionamos o 'sass-loader' na rule do CSS, e no test para scss, ficando assim:
                {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                }

DICA 1: SE ALGO DER ERRADO, REINICIA O TERMINAL E WEBPACK SERVE

ADD CONCEITOS COMPONENTES, PROPRIEDADE E ESTADO

DICA 2: INSTALAR PLUGIN PARA NÃO RETORNAR DO "ZERO" PELO WEBPACK
yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh

adiciona no config:
const ReactRefreshWeb = require ('@pmmmwh/react-refresh-webpack-plugin') 

Atualiza Plugin:
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    
Atualiza devServer:
    devServer: {
        static: path.resolve(__dirname, 'public'),
        hot: true,
    },

Atualiza 1 parte do rules:
        rules: [
            {
                test: /\.jsx$/, // importo o arquivo jsx
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


