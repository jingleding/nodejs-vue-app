'use strict'
let config = require('../../config/product.json')
if (process.env.NODE_ENV === 'development') {
    config = require('../../config/dev.json')
} else if (process.env.NODE_ENV === 'test') {
    config = require('../config/test.json')
}

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
