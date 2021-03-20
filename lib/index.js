const cmd = require('commander');
const create = require('./order/create');
cmd
    .version(`${require('../package.json').version}`, '-v --version')
    .usage('<command> [options]');

cmd
    .command('create <name>')
    .description('Create new project')
    .action(async(name) => {
        //这里可以拿到传入的参数
        create(name);
    });

cmd.parse(process.argv);