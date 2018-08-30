'use strict'

let pageList = {}

// 资源表
const resourceMap = require('../../resource.map.json')

module.exports = pageName => {
    if (pageList[pageName]) {
        return pageList[pageName]
    }

    console.log(`\n => 编译 ${pageName} 模板参数 :  \n`)

    console.log('\n ', JSON.stringify(resourceMap[pageName], null, '  '))

    let linkList = ''
    let scriptList = ''

    resourceMap[pageName].js.forEach(item => {
        scriptList += `<script src="${item}"></script>`
    })

    resourceMap[pageName].css.forEach(item => {
        linkList += `<link rel="stylesheet" href="${item}">`
    })

    return (pageList[pageName] = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
    <link rel="shortcut icon" href="http://s.zbjimg.com/img/favicon.ico" type="image/x-icon">
    <title>VUE单页面应用</title>
    ${linkList}
    <script type="text/javascript">
        //存放一些基本的页面信息
    </script>
    </head>
    <body>
    <div id="app"></div>
    ${scriptList}
    </body>
    </html>`)
}
