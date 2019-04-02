import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/my',
      name: 'all',
      component: require('@/layout/default').default,
      children: [
        {
          path: '/all',
          component: require('@/views/index').default
        }
      ]
    },
    {
      path: '/info',
      name: 'detail',
      component: require('@/layout/default').default,
      children: [
        {
          path: '/detail',
          component: require('@/views/detail').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/my'
    }
  ]
})
