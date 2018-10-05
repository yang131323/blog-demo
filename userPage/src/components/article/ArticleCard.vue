<style lang="less" scoped>
  @import '../common/color.less';

  .article-content {
    display: flex;
    flex-direction: row;
    height: 350 * @vw;
    padding: 30*@vw 20*@vw 40*@vw ;
    min-height: 240px;
    text-align: left;
    border-bottom: 1*@vw solid @iBorder;

    img {
      margin: 10*@vw 0 0 0;
      width: 400 * @vw;
      height: 240 * @vw;
      min-height: 75px;
    }

    .article-detail {
      display: flex;
      flex-direction: column;
      padding: 10*@vw 0;
      margin: 0 0 0 20*@vw;
      overflow: hidden; // 防止横向溢出
      text-overflow: ellipsis; // 显示省略 ellipsis

      p {
        font-size: 16 * @vw;
        color: @iContent;
        padding: 0;
        line-height: 24 * @vw;
        max-height: 170 * @vw;
        overflow: hidden; // 防止横向溢出
        text-overflow: ellipsis; // 显示省略 ellipsis
        margin: 0;
      }

      h3 {
        font-size: 24 * @vw;
        font-weight: 560;
        padding: 0;
        margin: 10*@vw 0 20*@vw 0;
        color: @iTitle;
      }
    }
  }
</style>

<template>
  <article class="article-content" @click="$emit('detail', item)">
    <img :src="item.photo" alt="photo" height="200" width="400">
    <article class="article-detail">
      <p>{{item.author}}
        <time pubdate>{{item.pubdate}}</time>
      </p>
      <h3>{{item.title}}</h3>
      <p>{{item.article}}</p>
    </article>
  </article>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {}
  }
}
</script>

