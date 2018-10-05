import Vue from 'vue'
import App from './App'
import BlogContact from '@/components/aside/Contact'
import BlogCatalogue from '@/components/aside/Catalogue'
import BlogHeader from '@/components/Header'

import TopGitment from 'top-gitment'
import router from './router'
import { Input, Icon, Button } from 'ant-design-vue'

Vue.component(Icon.name, Icon)
Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.use(TopGitment)

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
  render: h => h(App)
})
