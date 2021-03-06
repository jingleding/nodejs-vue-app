const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
let webpackConfig = {}
let outPath

if (process.env.NODE_ENV === 'production') {
    webpackConfig = require('./webpack.prod.conf')
    outPath = config.build.outPath
} else {
    webpackConfig = require('./webpack.dev.conf')
    outPath = config.dev.outPath
}

const spinner = ora('building for production...')
spinner.start()

rm(path.join(outPath), err => {
    if (err) throw err
    webpack(webpackConfig, function (err, stats) {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    })
})
