var express = require('express')
var router = express.Router()
const HttpApi = require('../api/http')
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    })
})
router.get('/ajaxGet', function (req, res, next) {
    var data = {
        success: true,
        data: '成功哦！'
    }
    res.json(data)
})
router.post('/ajaxPost', function (req, res, next) {
    res.header('Content-type', 'application/x-www-form-urlencoded')
    var data = {
        success: true,
        data: 'post成功哦！'
    }
    res.send(data)
})
router.get('/api/httpData', function (req, res, next) {
    new HttpApi().api1(req.query).then(rs => {
        res.json(rs.data)
    })
})
module.exports = router
