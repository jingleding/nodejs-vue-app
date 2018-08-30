/**
 * @author       jingle
 * @email        569155371@qq.com
 * @data         2018-08-29
 * @description  http请求封装
 */
const rp = require('request-promise')
const http = require('../schema/http')

module.exports = {
    getHttp: (service, params) => {
        let queryStr = '?'
        for (const key in params) {
            queryStr += `${key}=${params[key]}&`
        }
        const options = {
            url: `${http[service].https ? 'https://' : 'http://'}${http[service].server}${http[service].path}${queryStr}`,
            method: http[service].method,
            json: http[service].isJson,
            headers: http[service].headers
        }
        return rp(options).then(rs => {
            return rs
        }).catch(err => {
            console.error(err)
            return {}
        })
    },
    postHttp: (service, params) => {
        try {
            return rp({
                url: `${http[service].https ? 'https://' : 'http://'}${http[service].server}${http[service].path}`,
                method: http[service].method,
                json: http[service].pack,
                headers: http[service].headers,
                body: params
            }).then(rs => {
                return rs
            })
        } catch (error) {
            return error
        }
    }
}
