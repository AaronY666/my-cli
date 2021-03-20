/**
 * create 命令的具体任务
 */
const { selectFeature,initProjectDir } = require("../utils/create");
module.exports = async function create(projectName) {
  //初始化项目目录
  initProjectDir(projectName);

  // 选择需要的功能
  const feature = await selectFeature();
};
