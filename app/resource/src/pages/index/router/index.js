import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import 'mint-ui/lib/style.css'
import {
    Header,
    Button,
    Badge
} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Badge.name, Badge)
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index
    }]
})
