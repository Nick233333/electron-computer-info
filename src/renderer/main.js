import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import {
  Button,
  Row,
  Col,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Progress,
  Table,
  TableColumn
} from 'element-ui'

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Progress)
Vue.use(Table)
Vue.use(TableColumn)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.router = router

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
