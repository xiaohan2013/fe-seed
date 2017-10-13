// rollup.config.js
var resolve = require('rollup-plugin-node-resolve')
var babel = require('rollup-plugin-babel');
const version = process.env.VERSION || require('../package.json').version

const banner =
    '/*!\n' +
    ' * Seed.js v' + version + '\n' +
    ' * (c) 2017-' + new Date().getFullYear() + ' xiaohan2013 \n' +
    ' * Released under the MIT License.\n' +
    ' */\n'

module.exports = {
    input: 'src/index.js',
    output: {
        file: 'dist/seed.js',
        format: 'umd',
        name: 'Seed'
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ],
    banner: banner
};