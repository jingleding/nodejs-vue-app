'use strict'
/**
 * @author       jingle
 * @email        569155371@qq.com
 * @data         2018-08-28
 * @description  vue路由入口 	
 */
var express = require('express')
var router = express.Router()
// 模板资源
const render = require('../resource/src/service/renderService')
// 资源表
const resourceMap = require('../resource/resource.map.json')

// 使用vue来构建的项目路由，路径前统一加v作为标识，如:vindex/index, 读取resource/src/pages/* 下面对应的index文件
router.get(/^\/v([\w-]+)\/([\w-]+)/, (req, res, next) => {
    const page = req.params[0]
    const name = req.params[1]
    const pathArr = [page, name]
    const result = pathArr.join('/')
    console.log('vuerouter ===================>>')

    if (resourceMap[result]) {
        const dom = render(result)
        res.send(dom)
    } else {
        next()
    }
})
module.exports = router
