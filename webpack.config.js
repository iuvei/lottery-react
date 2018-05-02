
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
var APP_PATH = path.resolve(ROOT_PATH, 'src');
process.env.NODE_ENV = 'develoment'
module.exports = {
    entry: path.resolve(APP_PATH, 'app.js'),
    output: {
        path: BUILD_PATH,
        filename: '[name].bundle.js'
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {test:/\.(png|svg|gif|jpg)$/,use:[{loader:'file-loader?name=images/[hash:8].[name].[ext]'}]},
            {test:/\.css$/,use:[{loader:'style-loader'},{loader:'css-loader'}]}
        ]
    },
    plugins:[
        new HtmlwebpackPlugin({
            title: 'demo',
            filename:'index.html',
            template:path.resolve(APP_PATH,'./default.html')
        }),
    ],
    devServer: {
        historyApiFallback: true,
    }
}
