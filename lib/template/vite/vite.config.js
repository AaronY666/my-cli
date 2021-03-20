module.exports = {
    resolve: {
        alias: {}
    },
    server: {
        host: "localhost",
        port: 3000,
        https: false,
    },
    build: {
        // cssCodeSplit: false, //禁用css文件分割
        sourcemap: false, //source map 文件
        rollupOptions: {},
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            },
        },
    },
    plugins: []
}