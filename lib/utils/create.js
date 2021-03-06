const { getProjectPath } = require("./common");
const { exec, cd } = require("shelljs");
const { existsSync,writeFileSync } = require('fs');

const { prompt } = require("inquirer");

function initProjectDir(projectName) {
  // 判断文件是否已经存在
  const file = getProjectPath(projectName);
  // // 验证文件是否已经存在，存在则退出
  if (existsSync(file)) {
    console.log(`${file} 已经存在`);
    process.exit(1);
  }
  exec(`mkdir ${projectName}`);
  cd(projectName);
}

/**
 * 交互式命令行，让用户自己选择需要的功能
 *
 */
async function selectFeature() {
  const { feature } = await prompt([
    {
      name: "feature",
      type: "checkbox",
      message: "Check the features needed for your project",
      choices: [
        { name: "vite", value: "vite", checked: true },
        { name: "typescript", value: "typescript" },
        { name: "babel", value: "babel" },
      ],
    },
  ]);

  return feature;
}

function installFeature(feature, projectName) {
    const featureArr = feature.map(name => require(`../feature/${name}`))
    const packageJson = {
        name: projectName,
        version: '1.0.0',
        dependencies: {},
        devDependencies: {},
    }
    featureArr.forEach(item => {
        item(packageJson)
    })

    return packageJson;
}

function initPackage(package) {
  writeFileSync(process.cwd() + "/package.json", JSON.stringify(package, null, 4));
}

function installModule() {
  exec('npm i')
}

module.exports = {
  initProjectDir,
  selectFeature,
  installFeature,
  initPackage,
  installModule
};
