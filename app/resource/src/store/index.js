import Vue from 'vue'
import Vuex from 'vuex'
import Ages from './ages'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    ages: Ages
  }
})
