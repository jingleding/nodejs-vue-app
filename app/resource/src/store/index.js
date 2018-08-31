import Vue from 'vue'
import Vuex from 'vuex'
import Ages from './ages'
import Dialog from './dialog'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    ages: Ages,
    dialog: Dialog
  }
})
