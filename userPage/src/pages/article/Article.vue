<style lang="less" scoped>
  @import '../../components/common/color.less';

  .my-article-page {
    width: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    background-color: white;

    .my-article-container {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;

      .article-title {
        position: absolute;
        z-index: 10;
        top: 20%;
        width: 100%;
        height: auto;
        text-align: center;
        opacity: 1;
        color: @iContent;
        font-size: 36 * @vw;
        font-weight: 560;
      }

      .main-img {
        width: 100%;
        height: 400 * @vw;
        min-height: 240px;
      }

      .content-container {
        display: flex;
        justify-content: space-between;
        padding: 0 5% 0 5%;
        margin: 50*@vw 0 30*@vw 0;

        .article-content {
          width: 70%;
          padding: 0 15*@vw 0 0;
          margin: 26*@vw 30*@vw 20*@vw 0;
          border-right: 2*@vw solid @iBorder;

          h1 {
            margin: 10*@vw auto;
          }
        }

        .person-message {
          display: flex;
          flex-direction: column;
          width: 25%;
          margin: 10*@vw 0 0 20*@vw;
        }
      }
    }

    #gitalk-container {
      text-align: left;
      margin: 10*@vw;
    }
  }
</style>

<template>
  <div class="my-article-page">
    <blog-header v-model="searchKey"></blog-header>
      <main class="my-article-container">
        <img src="../../assets/mountain-landscape-2031539.jpg" alt="photo" width="100%" height="400">
        <h1 class="article-title">{{article.title}}</h1>
        <main class="content-container">
          <article class="article-content">
            <h1>{{article.title}}</h1>
            <p :style="'text-align: left;'">{{article.article}}</p>
          </article>
          <aside class="person-message">
            <blog-catalogue :catalogueArr="catalogueArr"></blog-catalogue>
            <blog-contact :contactArr="contactArr" @detail="toContact"></blog-contact>
          </aside>
        </main>
      </main>
      <div id="gitalk-container"></div>
  </div>
</template>

<script>
import articleData from '@/store/data/articleData'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

export default {
  data () {
    return {
      searchKey: '',
      article: articleData[Math.floor(Math.random() * 15)],
      contactArr: ['google', 'facebook', 'wechat', 'qq', 'weibo'],
      options: {
        id: Math.floor(Math.random() * 1000000000), // 评论页唯一标识符
        owner: 'yang131323',// github用户名
        repo: 'https://github.com/yang131323/mgblog-comment.git', // 用于存放评论的仓库
        oauth: {
          client_id: 'd1a01ea24c2402a6bb23', 
          client_secret: '5588a8870b6ccd8963a857d8eaf5c50fe3b0da4f',
        } 
      },
      catalogueArr: [{
        url: '/',
        title: 'before you break my heart'
      }, {
        url: '/',
        title: 'cry my shouder'
      }, {
        url: '/',
        title: 'something just like this'
      }, {
        url: '/',
        title: '我就是世界上best的人----你知道吗'
      }, {
        url: '/',
        title: '我知道'
      }],
    }
  },
  mounted: function () {
    let gitalk = new Gitalk({
      clientID: 'e9bbe5cab49497965c55',
      clientSecret: '9275e5b23e992c045ea1b88cee2299fe5def3581',
      repo: 'blogTalk',
      owner: 'yang131323',
      admin: ['yang131323'],
      id: location.pathname,
      distractionFreeMode: false
    })
    gitalk.render('gitalk-container')
  },
  methods: {
    toContact (val) {
      console.log(val)
    }
  }
}
</script>
