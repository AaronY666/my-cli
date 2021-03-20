/**
 * create 命令的具体任务
 */
const { selectFeature } = require("../utils/create");
module.exports = async function create(projectName) {
  // 选择需要的功能
  const feature = await selectFeature();
};
