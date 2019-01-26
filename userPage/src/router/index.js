import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from './test'
import Blog from './blog'
import Article from './article'

Vue.use(Router)

const routes = [
  {
    path: '/home',
    component: HelloWorld,
    children: [].concat(Blog),
    meta: {
      title: '博客'
    }
  }, {
    path: '/article',
    component: resolve => require(['@/pages/article/index'], resolve),
    children: [].concat(Article),
    meta: {
      title: '博客 - 文章'
    }
  }, {
    path: '/',
    component: resolve => require(['@/pages/Test'], resolve),
    children: [].concat(Test),
    meta: {
      title: '测试'
    }
  }
]

export default new Router({
  routes
})
