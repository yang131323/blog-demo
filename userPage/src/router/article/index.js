export default [
  {
    path: 'detail/:id',
    name: 'ArticleDetail',
    component: resolve => require(['@/pages/article/Article'], resolve),
    meta: {
      title: '博客 - 文章详情'
    }
  }, {
    path: 'create',
    name: 'CreateDetail',
    component: resolve => require(['@/pages/article/Create'], resolve),
    meta: {
      title: '博客 - 添加文章'
    }
  }
]