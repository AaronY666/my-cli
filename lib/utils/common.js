const { resolve } = require('path')

function getProjectPath(projectName) {
    return resolve(process.cwd(), projectName);
}

function extendPackage(minor, main) {
    for (let key in minor) {
        if (main[key] === undefined) {
            main[key] = minor[key];
        } else {
            if (Object.prototype.toString.call(minor[key]) === '[object Object]') {
                extendPackage(minor[key], main[key]);
            } else {
                main[key] = minor[key];
            }
        }
    }
};

module.exports = {
    getProjectPath,
}