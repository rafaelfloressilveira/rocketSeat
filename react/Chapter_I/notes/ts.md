Instalar o TypeScript

yarn add typescript -D

Inciiar o TypeScript na aplicação

yarn tsc --init

Ele cria um tsconfig.json na pasta principal

aprox. na linha 15, descomentamos a linha lib e adicionamos algumas bibliotecas nela:
 "lib": ["dom", "dom.iterable", "esnext"],
 
descomentamos:
"allowJs": true,
"allowSyntheticDefaultImports": true,
"moduleResolution": "node",
"resolveJsonModule": true,
"isolatedModules": true,
"noEmit": true,
"jsx": "react-jsx",

REMOVE:
"target": "es2016",
"module": "commonjs",

Adicionamos dentro do compiler:
"include":["src"]

Ao final, ficamos assim sem todos os comentários:
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "react-jsx",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "allowJs": true,
    "noEmit": true,
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include":["src"]
}

Para que o babel consiga traduzir os arquivos TS, vamos adicionar mais uma config.
yarn add @babel/preset-typescript -D

Em babel.config, adicionamos este preset:
module.exports = {
    presets: [
        '@babel*preset-typescript',
        '@babel/preset-env',
        ['@babel/preset-react', {
            runtime: 'automatic'
        }]
    ]
};

Dentro do webpack.config mudaremos algumas coisas:
test: /\.(j|t)sx$/,
extensions: ['.js', '.jsx', 'ts', 'tsx'],
entry: path.resolve(__dirname, 'src', 'index.tsx'), // com isso, tbm alteramos a extensão dentro da nossa aplicação para index.tsx

instalamos uma config para que seja entendido a bib de outras extensões.
yarn add @types/react-dom -D
yarn add @types/react -D

Alteramos todos os padrões JS para TS

Finalizando:
Adicionar extensão chrome React DevTool

