import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goodslist from '../page/goodslist.vue'
import goodsins from '../page/goodsins.vue'
import goodsdec from '../page/goodsdec.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'goodslist',
      component: goodslist
    },
    {
      path: '/goodsins',
      name: 'goodsins',
      component: goodsins
    },
    {
      path: '/goodsdec',
      name: 'goodsdec',
      component: goodsdec
    }
  ]
})
