const { resolve } = require("path");
const { writeFile, readdir, stat, readFileSync, mkdirSync } = require('fs');

function getProjectPath(projectName) {
  return resolve(process.cwd(), projectName);
}

function extendPackage(minor, main) {
  for (let key in minor) {
    if (main[key] === undefined) {
      main[key] = minor[key];
    } else {
      if (Object.prototype.toString.call(minor[key]) === "[object Object]") {
        extendPackage(minor[key], main[key]);
      } else {
        main[key] = minor[key];
      }
    }
  }
}

async function copyTemplate(from, to) {
  stat(from, (err, stat) => {
      //如果是目录，则遍历复制
      if (stat.isDirectory()) {
          readdir(from, (err, paths) => {
              paths.forEach(path => {
                  //如果是文件夹，则创建
                  if (!/\./.test(path)) {
                      mkdirSync(to + "\\" + path)
                  }
                  copyTemplate(from + "\\" + path, to + "\\" + path)
              })
          })
      } else {
          //否则直接复制文件
          writeFile(to, readFileSync(from), () => {});
      }
  })
}

function generateFiles(tempName) {
  // const target=process
  const from = resolve(__dirname, `../template/${tempName}`);
  const to = process.cwd();
  copyTemplate(from, to);
}

module.exports = {
  getProjectPath,
  extendPackage,
  generateFiles
};
