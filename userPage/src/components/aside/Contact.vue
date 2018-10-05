<style lang="less" scoped>
  @import '../common/color.less';

  fieldset {
    position: relative;
    color: @iContent;
    display: flex;
    flex-direction: column;
    margin: 0 0 20*@vw 0;
    font-size: 16 * @vw;
    height: auto;
    border: 1*@vw solid @iBorder;

    legend {
      width: auto;
      height: auto;
      color: @iContent;
      font-size: 24 * @vw;
      background-color: white;
    }
  }

  .icon-container {
    display: flex;
    justify-content: center;
    margin: 10*@vw 0 20*@vw;

    .icon {
      padding: 8*@vw 10*@vw;
      margin: 0 6*@vw;
      border: 1*@vw solid @iBorder;
    }
  }

  .contact-me {
    margin: 20*@vw 0 0 0;
  }
</style>

<template>
  <section class="contact-me">
    <fieldset>
      <legend>{{title}}</legend>
      <div class="icon-container">
        <div class="icon"  v-for="item in contactArr" :key="item" @click="$emit('detail', item)">
          <a-icon :type="item"/>
        </div>
      </div>
    </fieldset>
  </section>
</template>

<script>
export default {
  props: {
    contactArr: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: 'Contact Me'
    }
  },
  data () {
    return {}
  }
}
</script>

