import Vue from 'vue'
import Vuex from 'vuex'
import goodsone from './goods/goodsone';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    goodsone
  }
});
