<style lang="less" scoped>
  @import '../common/color.less';

  .img-content-container {
    position: absolute;
    z-index: 10;
    height: 240 * @vw;
    min-height: 180px;
    width: 40%;
    top: 25%;
    padding: 0;
    margin: 0;
    left: 30%;
    right: 30%;
    opacity: 1;

    p {
      padding: 0;
      margin: 10*@vw 0 0 0;
      font-size: 24 * @vw;
      color: @iBackground;
    }

    h1 {
      padding: 0;
      margin: 10*@vw 0;
      font-size: 36 * @vw;
      color: @iBackground;
    }

    .icon-container {
      display: flex;
      justify-content: center;
      margin: 10*@vw 0 0 0;

      .icon {
        padding: 10 * @vw;
        margin: 0 10*@vw;
        border: 2*@vw solid @iLight;
      }
    }
  }
</style>

<template>
  <section class="img-content-container">
    <h1>{{information && information.name || '无'}}</h1>
    <p>{{information && information.career || '无'}}</p>
    <div class="icon-container">
      <div class="icon" v-for="(item, index) in iconArr" :key="index" @click="$emit('detail', item)">
        <a-icon :type="item"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    information: {
      type: Object,
      default: () => {}
    },
    iconArr: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  }
}
</script>

