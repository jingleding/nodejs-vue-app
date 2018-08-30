function Ajax () {
    this.handleEvent()
}
Ajax.prototype.handleEvent = function () {
    document.getElementById('get-btn').onclick = function () {
        var ajax = new XMLHttpRequest()
        ajax.open('get', '/ajaxGet')
        ajax.send()
        ajax.onreadystatechange = function () {
            // if (ajax.readyState == 4) {
            //     if (ajax.status == 200) {
            //         //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            //         alert(ajax.responseText) //输入相应的内容
            //     } else {
            //         alert(ajax.responseText) //输入相应的内容
            //     }
            // }
            // alert(ajax.readyState) //输入相应的内容
            alert(ajax.statusText) // 输入相应的内容
        }
    }
    document.getElementById('post-btn').onclick = function () {
        var ajax = new XMLHttpRequest()
        ajax.open('post', '/ajaxPost')
        // ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        ajax.setRequestHeader('Content-type', 'application/json')
        var data = {
            'aa': 1,
            'bb': 2
        }
        // ajax.send(_self.jsonToStr(data))
        ajax.send(data)
        // ajax.send('name=张三&age=20')
        ajax.onreadystatechange = function () {
            // if (ajax.readyState == 4) {
            //     if (ajax.status == 200) {
            //         //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            //         alert(ajax.responseText) //输入相应的内容
            //     } else {
            //         alert(ajax.responseText) //输入相应的内容
            //     }
            // }
            // alert(ajax.status)
            // alert(ajax.readyState) //输入相应的内容
            alert(ajax.statusText) // 输入相应的内容
            // alert(ajax.getResponseHeader('Content-type'))
            // alert(ajax.getAllResponseHeaders())
        }
    }
    document.getElementById('http-btn').onclick = function () {
        var ajax = new XMLHttpRequest()
        ajax.open('get', '/api/httpData?pageNum=1&pageSize=5&treeId=16&recommend=1')
        ajax.send()
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    //         //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
                    alert(JSON.parse(ajax.responseText).data.data.list[0].title) // 输入相应的内容
                    console.dir(JSON.parse(ajax.responseText)) // 输入相应的内容
                } else {
                    alert(ajax.responseText) // 输入相应的内容
                }
            }
            // alert(ajax.readyState) //输入相应的内容
            // alert(ajax.statusText) //输入相应的内容
        }
    }
}
Ajax.prototype.jsonToStr = function (data) {
    var oStr = ''
    for (var key in data) {
        oStr += key + '=' + data[key] + '&'
    }
    return oStr
}
new Ajax()
