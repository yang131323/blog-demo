
export default [
  {
    path: '',
    name: 'TransitionOne',
    component: resolve => require(['@/pages/TransitionOne'], resolve),
    meta: {
      title: '测试 - 过渡一'
    }
  }, {
    path: '/two',
    name: 'TransitionTwo',
    component: resolve => require(['@/pages/TransitionTwo'], resolve),
    meta: {
      title: '测试 - 过渡二'
    }
  }
]