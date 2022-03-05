# react_ejemplos
diferentes ejemplos de react

Requisito Previo:
    Tener instalado la ultima versión de Nodejs

Creación de aplicación React con "create-react-app"

Ejecutar los siguientes comandos: 
    Instalación
        npm create-react-app mi-aplicación
    Entrar al Proyecto
        cd mi-aplicación
    Iniciar la aplicación
        npm start o npm run start

Creación de una aplicación React con una configuración personalizada con Webpack y Babel

    1. Dentro de la carpeta del proyecto ejecutar el comando "npm init -y"
    2. Si el proyecto se va a guardar en algún repositorio de github, es necesario evitar que se suban carpetas que no sean necesarias, como la de "node_modules". Para realizar eso, se crea un archivo dentro de la carpeta del proyecto llamado ".gitignore" y dentro del archivo escribir "/node_modules" 
    3. Instalar el framework de React y React-DOM con el siguiente comando: npm install react react-dom -s
    4. Instalar Webpack con el siguiente comando: npm install webpack webpack-cli webpack-dev-server -D
    5. Instalar Babel y otras dependencias para la configuración de Webpack mediante el siguiente comando: npm install @babel/core @babel/preset-env @babel/preset-react babel-loader html-loader html-webpack-plugin -D

    6. Dentro de la Carpeta del proyecto crear los siguientes dos archivos: .babelrc y webpack.config.js
        Dentro del archivo .babelrc se escribe la siguiente configuración:
                            {
                                "presets":[
                                    "@babel/preset-env",
                                    "@babel/preset-react"
                                ]
                            }
        
        Dentro del archivo de webpack.config.js escribir la siguiente configuración: 

const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports ={
    mode:'development',
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'build.js',
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename:'./index.html'
        })
    ]
}


    7. Dentro de la carpeta del Proyecto crear una carpeta llamada public la cual servirá para almacenar los archivos html que se publicarán y otra carpeta llamada src la cual servira para almacenar los componentes js y jsx

    8. Dentro de la carpeta public, crear el archivo "index.html" y escribir una estructura básica de html, dentro del mismo crear un div con id="root"

    9. Dentro de la carpeta src, crear un archivo "index.js" para correr la aplicación y al mismo tiempo crear una carpeta components y dentro de ella crear un archivo "App.jsx", dicho archivo será el componente que se mostrará en la página web
    
    10. En el archivo index.js escribir el siguiente código:

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"; //llamando al componente
ReactDOM.render(
    <App/>, document.getElementById("root") //renderizando el componente en el elemento
);

    11. En el archivo App.jsx escribir el siguiente código:
import React from "react"; // se importa la libre 

const App = () =>{// se crea el componente 
    return(
        <h1> hola </h1>
    )
}

export default App;// se exporta el componente



    12. En el archivo de package.json en el apartado de "scripts", escribir los siguientes: 
    "start": "webpack server --open --config webpack.config.js",
    "build": "webpack --mode=production --config=webpack.config.js"