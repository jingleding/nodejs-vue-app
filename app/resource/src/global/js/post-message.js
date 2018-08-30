/**
 *@author jingle
 * @time 18/02/28
 * @des 向新boss post消息
 */
function postMessage () {
    // 判断当前的window对象是否是top对象
    if (window !== top) {
        (() => {
            const splits = location.host.split('.')
            splits.shift()
            const domain = splits.join('.')
            const host = `//boss.${domain}`
            // post message to top
            if (location.href.indexOf('noupdatehistory') === -1) {
                parent.postMessage(`updateHistory:::${location.href}`, host)
            }
            parent.postMessage(`changetitle:::${document.title}`, host)
        })()
    }
}
postMessage()
