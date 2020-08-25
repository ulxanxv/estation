var path = require('path');
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');

module.exports = {
    entry: './src/main/js/app.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: path.join(__dirname, './src/main/resources/static/built'),
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    },
    plugins: [
        new ExtWebpackPlugin({
            framework: 'react',
            toolkit: 'modern',
            theme: 'theme-material',
            packages: [],
            script: '',
            emit: 'yes',
            port: 1962,
            profile: '',
            environment: 'development',
            treeshake: 'no',
            browser: 'no',
            watch: 'no',
            verbose: 'no',
            inject: 'no',
            intellishake: 'no'
          })
    ]
};