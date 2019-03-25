import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/views/index').default
    },
    {
      path: '/detail',
      name: 'detail',
      component: require('@/views/detail').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
