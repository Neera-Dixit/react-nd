var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var clientBuildPath = path.resolve(__dirname, 'public','assets','build');
var clientMainPath = path.resolve(__dirname, 'src','components','index.js');


 module.exports = [

    {
         name : 'client',
         target : 'web',
         entry:  [
                    clientMainPath
                ],
         output: {
             path: clientBuildPath,
             publicPath: 'public/assets/build/',
             filename: 'bundleclient.js'
         },
         module: {
             loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
            }]
         },
         devServer: {
            inline:true
         }
    }

 ];