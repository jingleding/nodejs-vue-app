const util = require('../lib/util')

class Http {
    constructor (params) {
        this.params = params
    }
    api1 (data) {
        return util.getHttp('httpData', data).then(rs => {
            if (rs.success) {
                return util.getHttp('httpData', {
                    pageNum: 1,
                    pageSize: 10,
                    treeId: 16,
                    recommend: 1
                })
            } else {
                return rs
            }
        }).then(rs => {
            return rs
        }).catch(err => {
            return {
                success: false,
                msg: err || '网络错误'
            }
        })
    }
}
module.exports = Http
