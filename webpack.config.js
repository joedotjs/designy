var path = require('path');

module.exports = {
    devtool: 'sourcemaps',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss?$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    }
};
