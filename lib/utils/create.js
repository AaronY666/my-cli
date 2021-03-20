
const { prompt } = require('inquirer')

/**
 * 交互式命令行，让用户自己选择需要的功能
 * 
 */
async function selectFeature() {
    const { feature } = await prompt([{
        name: 'feature',
        type: 'checkbox',
        message: 'Check the features needed for your project',
        choices: [
            { name: 'vite', value: 'vite', checked: true },
            { name: 'typescript', value: 'typescript' },
            { name: 'babel', value: 'babel' },
        ],
    }, ]);

    return feature;
}




module.exports = {
    selectFeature,
}