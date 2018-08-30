'use strict'
/**
 * @author       jingle
 * @email        569155371@qq.com
 * @data         2018-08-29
 * @description  http接口配置
 */
module.exports = {
    'httpData': {
        server: `${config.server}`,
        path: '/api/gameNewsService/queryIndustryArticleList',
        method: 'get',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        isJson: true,
        https: true
    }
}
