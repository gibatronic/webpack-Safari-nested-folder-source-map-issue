const { resolve: pathResolve } = require('path');

module.exports = {
    entry: {
        'bundle-nested': './src/nested/nested.js',
        'bundle-simple': './src/simple.js'
    },

    mode: 'production',

    output: {
        path: pathResolve(__dirname, 'dist'),
    },

    devtool: 'source-map'
};
