const path = require('path')
const fs = require('fs')
module.exports = {
    /**
     * 自动加载路由文件
     * @param routersPath
     */
    autoLoadRoutes: (routersPath, app) => {
        const self = this
        fs.readdirSync(routersPath).forEach(function (file) {
            const filePath = path.join(routersPath, file)
            const stats = fs.statSync(filePath)
            if (stats.isDirectory()) {
                self.autoLoadRoutes(filePath)
            } else {
                // console.log(filePath)
                // 过滤掉以'.'开头的文件
                if (file[0] !== '.') {
                    try {
                        app.use('/', require(filePath))
                    } catch (e) {
                        console.error(e)
                    }
                }
            }
        })
    }
}
