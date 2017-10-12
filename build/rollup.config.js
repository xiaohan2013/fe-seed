// rollup.config.js
var resolve = require('rollup-plugin-node-resolve')
var babel = require('rollup-plugin-babel');
const version = process.env.VERSION || require('../package.json').version

module.exports = {
    input: 'src/index.js',
    output: {
        file: 'dist/seed.js',
        format: 'umd'
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        })
    ],
    banner: '/* my-library version ' + version + ' */'
};