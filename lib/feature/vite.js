const { extendPackage, generateFiles } = require('../utils/common')
const { resolve } = require('path')
module.exports = function(packageJson) {
    mergePackage(packageJson);
    // writeConfig();
    generateFiles("vite");
}


function mergePackage(package) {
    const config = {
        scripts: {
            "dev": "vite",
            "build": "tsc&&vite build",
            "serve": "vite preview"
        },
        devDependencies: {
            "vite": "^2.0.1"
        },
    }
    extendPackage(config, package)
}