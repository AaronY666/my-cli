const { extendPackage, generateFiles } = require('../utils/common');
module.exports = function(packageJson) {
    mergePackage(packageJson);
    generateFiles('webpack');
}


function mergePackage(packageJson) {
    const webpackConfig = {
        scripts: {
            "build": "webpack --config ./build/webpack.prod.js",
            "start": "webpack-dev-server --config ./build/webpack.dev.js",
        },
        devDependencies: {
            "webpack": "^4.39.3",
            "webpack-cli": "^3.3.10",
            "webpack-dev-server": "^3.8.0",
            "webpack-merge": "^4.2.2",
            "terser-webpack-plugin": "^4.2.3",
            "clean-webpack-plugin": "^3.0.0",
            "html-webpack-plugin": "^3.2.0",
        },
    }

    extendPackage(webpackConfig, packageJson);
}