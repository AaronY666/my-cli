module.exports = {
    // cacheDirectory: true,
    presets: [
        [
            '@babel/preset-env',
            {
                loose: true,
                targets: { node: 'current' }
            }
        ],
        '@babel/preset-typescript'
    ],

    plugins: ['@babel/plugin-proposal-optional-chaining', '@babel/plugin-proposal-nullish-coalescing-operator']
};