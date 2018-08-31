import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import signInfo from '../views/sign-info'
import 'mint-ui/lib/style.css'
import {
    Header,
    Button,
    Badge,
    Popup,
    Navbar,
    TabItem,
    TabContainer,
    TabContainerItem,
    Loadmore
} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Badge.name, Badge)
Vue.component(Popup.name, Popup)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Loadmore.name, Loadmore)
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index
    }, {
        path: '/signInfo',
        name: 'signInfo',
        component: signInfo
    }]
})
