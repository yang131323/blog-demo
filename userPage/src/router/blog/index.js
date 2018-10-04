export default [
  {
    path: '',
    name: 'Home',
    component: resolve => require(['@/pages/blog/Home'], resolve),
    meta: {
      title: '博客 - 主页'
    }
  }
]