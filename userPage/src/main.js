import Vue from 'vue'
import App from './App'
import store from './store'
import BlogContact from '@/components/aside/Contact'
import BlogCatalogue from '@/components/aside/Catalogue'
import BlogHeader from '@/components/Header'

import router from './router'
import { Input, Icon, Button } from 'ant-design-vue'
import mavonEditor from 'mavon-editor'

Vue.component(Icon.name, Icon)
Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.use(mavonEditor)

Vue.component('BlogContact', BlogContact)
Vue.component('BlogCatalogue', BlogCatalogue)
Vue.component('BlogHeader', BlogHeader)

Vue.use(Input)
Vue.use(Icon)
Vue.use(Button)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
