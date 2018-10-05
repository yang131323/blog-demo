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

  .icon-container {
    display: flex;
    justify-content: center;
    margin: 10*@vw 0 0 0;

    .icon {
      padding: 8*@vw 10*@vw;
      margin: 0 6*@vw;
      border: 1*@vw solid @iBorder;
    }
  }

  .contact-me {
    height: 80 * @vw;
    min-height: 80px;
    margin: 20*@vw 0;
  }
</style>

<template>
  <section class="article-catalogue">
    <fieldset>
      <legend>{{title}}</legend>
      <ol>
        <li v-for="item in catalogueArr" :key="item"><a href="">{{item}}</a></li>
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
