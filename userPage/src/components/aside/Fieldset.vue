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
    border: 1*@vw solid @iBorder; // 

    legend {
      width: auto;
      height: auto;
      color: @iContent;
      font-size: 24 * @vw;
      background-color: white;
    }
  }
</style>

<template>
  <fieldset :style="{border: size + 'px solid' + color, 'min-height': minHeight + 'px'}">
    <legend>{{title}}</legend>
    <slot></slot>
  </fieldset>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    size: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: '#dddee1'
    },
    minHeight: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {}
  }
}
</script>

