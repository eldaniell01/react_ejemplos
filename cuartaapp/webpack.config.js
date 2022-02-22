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
        extensions:[".js", ".jsx", ".json"],
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    },
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            },
            {
                use:["style-loader","css-loader"],
                test:/\.css$/,
            },
            {
                test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: "file-loader",
                options: {
                    name: "asset/resource/[name].[ext]"
                }
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