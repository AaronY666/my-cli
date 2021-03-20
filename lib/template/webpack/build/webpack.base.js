const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, '../dist'),
        globalObject: 'this'
    },
    // devtool: 'source-map',
    resolve: {
        extensions: ['.js'],
        alias: {}
    },

    module: {
        // noParse: "",
        rules: []
    },
    plugins: [

    ]
};