const path = require('path')
const utils = require('./utils')
const config = require('../config/index')
const vueLoaderConfig = require('./vue-loader.conf')
const webpack = require('webpack')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    entry: Object.assign({
        'loaded': `${config.common.resourcePath}/global/loaded.js`
    },
    utils.entries(), {
        'project': `${config.common.resourcePath}/global/index.js`
    }),
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common'),
        function () {
            // 数据处理 用于生成 webpackMap
            this.plugin('done', function (map) {
                let webpackMap = {}

                // 调用 webpack map toJson 生成 jsonMap
                map = map.toJson()

                Object.keys(map.entrypoints).forEach(function (item) {

                    // 如果入口路径不包含 / 则不输出 例如 入口  name == 'project'
                    if (item.indexOf('/') < 0) {
                        return
                    }
                    // 页面名
                    let pageName = item.split('/')

                    // index为默认路由，兼容一下不是index文件名的文件
                    // if(pageName[pageName.length - 1] == 'index'){
                    //   pageName = pageName.slice(0,-1);
                    //   console.log('page----', pageName);
                    // }

                    pageName = pageName.join('/')
                    webpackMap[pageName] = {}
                    webpackMap[pageName].js = []
                    webpackMap[pageName].css = []

                    console.log('map.assetsByChunkName-------------------')
                    console.dir(map.assetsByChunkName);

                    // 公共资源 (映射) 处理
                    [].concat(map.assetsByChunkName['manifest']).forEach(mapAsset);
                    [].concat(map.assetsByChunkName['common']).forEach(mapAsset);

                    // 项目公共资源 (映射) 处理
                    [].concat(map.assetsByChunkName['project']).forEach(mapAsset);
                    // 页面级别资源 (映射) 处理
                    [].concat(map.assetsByChunkName[item]).forEach(mapAsset);
                    // 项目公共资源 (映射) 处理
                    [].concat(map.assetsByChunkName['loaded']).forEach(mapAsset)

                    /**
                     * 根据资源类型，将其映射(map)到对应的数组中
                     * @param assetsPath  资源路径
                     */
                    function mapAsset (assetsPath) {
                        if (!assetsPath) {
                            return
                        }

                        console.log('assetsPath+++++++++', assetsPath)

                        if (path.extname(assetsPath) === '.js') {
                            // 绝对路径 = publicPath +  assetsPath
                            webpackMap[pageName].js.push(map.publicPath + assetsPath)
                        } else if (path.extname(assetsPath) === '.css') {
                            webpackMap[pageName].css.push(map.publicPath + assetsPath)
                        }
                    }
                })
                // webpackMap 写入 config.json
                require('fs').writeFileSync(
                    path.join(__dirname, '..', 'resource.map.json'),
                    JSON.stringify(webpackMap, null, '  '))
                // TODO 暂时测试使用
                require('fs').writeFileSync(
                    path.join(__dirname, '..', 'webpack.map.json'),
                    JSON.stringify(map, null, '  '))
            })
        }
    ]
}
