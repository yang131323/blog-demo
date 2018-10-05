<style lang="less" scoped>
@import './common/color.less';

.header-menu {
  position: fixed;
  z-index: 10;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50 * @vw;
  min-height: 30px;
  padding: 11*@vw 40*@vw 0 0;
  opacity: 0.4;
  background-color: @iContent;

  ul {
    flex-grow: 1;
    list-style-type: none;
    width: 50%;
    height: 100%;
    margin: 0;
    overflow: hidden;
    color: @iBackground;

    li {
      float: left;
      color: @iBackground;
    }
  }

  a {
    height: 100%;
    display: block;
    width: 120 * @vw;
    font-size: 20 * @vw;
    color: @iBackground;
    text-align: center;
  }

  .search-input {
    margin: 0 40*@vw 0 0;
    height: 30 * @vw;
  }
}
</style>

<template>
  <nav class="header-menu">
    <ul>
      <li><a :href="homeSrc">主页</a></li>
      <li><a :href="personSrc">个人简介</a></li>
    </ul>
    <a-input-search
      size="small"
      class="search-input"
      placeholder="搜索文章标题"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :style="{width: '320px'}"/>
  </nav>
</template>

<script>
export default {
  props: {
    homeSrc: {
      type: String,
      default: '/'
    },
    personSrc: {
      type: String,
      default: '/home'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>

