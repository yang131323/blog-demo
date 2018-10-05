<style lang="less" scoped>
  @import '../common/color.less';

  .article-catalogue {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 0;
    min-height: 300px;
  }

  fieldset {
    color: @iContent;
    display: flex;
    flex-direction: column;
    margin: 0 0 20*@vw 0;
    font-size: 16 * @vw;
    height: auto;
    min-height: 300px;
    border: 1*@vw solid @iBorder;

    legend {
      width: auto;
      height: auto;
      color: @iContent;
      font-size: 24 * @vw;
      background-color: white;
    }

    ol li {
      font-size: 18 * @vw;
      margin: 8*@vw 0 0;
      text-align: left;
    }
  }
</style>

<template>
  <section class="article-catalogue">
    <fieldset>
      <legend>{{title}}</legend>
      <ol>
        <li v-for="item in catalogueArr" :key="item.title + item.url"><a :href="item.url">{{item.title}}</a></li>
      </ol>
    </fieldset>
  </section>
</template>

<script>
export default {
  props: {
    catalogueArr: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: 'Catalogue'
    }
  },
  data () {
    return {}
  }
}
</script>
