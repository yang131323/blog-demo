import Vue from 'vue'
import App from './App'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import Icon from 'ant-design-vue/lib/icon'

Vue.component(Icon.name, Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
