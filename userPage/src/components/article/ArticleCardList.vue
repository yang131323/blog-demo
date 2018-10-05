<style lang="less" scoped>
  @import '../common/color.less';
</style>

<template>
  <div>
    <blog-article v-for="item in items" :item="item" @detail="$emit('detail', $event)" :key="item.id"></blog-article>
  </div>
</template>

<script>
import BlogArticle from './ArticleCard'

export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  components: {
    BlogArticle
  }
}
</script>

