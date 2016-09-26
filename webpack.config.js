var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: __dirname + '/public/react/main.jsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public/build'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
