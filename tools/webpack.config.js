var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/assets/javascript/application.js',
    output: {
        path: path.resolve(__dirname, '../src/assets/scripts/'),
        filename: 'bundle.min.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
