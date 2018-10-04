import Vue from 'vue'
import App from './App'
import router from './router'
import { Input, Icon } from 'ant-design-vue'

Vue.component(Icon.name, Icon)
Vue.component(Input.name, Input)

Vue.use(Input)
Vue.use(Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
