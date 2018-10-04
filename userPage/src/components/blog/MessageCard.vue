<style lang="less" scoped>
@import '../common/color.less';

.personal-profile-card {
  display: flex;
  flex-direction: column;
  margin: -50*@vw 10*@vw 0 10*@vw;
  padding: 15 * @vw;
  width: 400 * @vw;
  min-height: 250px;
  background-color: @iCardBackground;

  img {
    margin: 0 auto;
    margin-top: 30px;
    width: 120 * @vw;
    height: 120 * @vw;
    padding: 5 * @vw;
    border: 3*@vw solid @iLight;
  }

  fieldset {
    margin: 15*@vw 30*@vw 0 30*@vw;
    padding: 0 10*@vw 10*@vw 10*@vw;
    color: @iBackground;
    font-size: 20 * @vw;
    text-align: center;
    height: 100%;
    border: 1*@vw solid @iBackground;
    overflow: hidden; // 防止横向溢出
    text-overflow: ellipsis; // 显示省略

    legend {
      width: auto;
      height: auto;
      background-color: @iCardBackground;
    }

    p {
      padding: 0;
      margin: 0;
      // line-height: 30 * @vw;
      text-align: left;
      color: @iBackground;
      // max-height: 330 * @vw;
      font-size: 18 * @vw;
      overflow: hidden; // 防止横向溢出
      text-overflow: ellipsis; // 显示省略
    }
  }

  .avatar-photo {
    border-radius: 60 * @vw;
  }
}
</style>

<template>
  <article class="personal-profile-card">
    <img class="avatar-photo" v-bind:src="photo" alt="Avator" width="120" heihgt="120">
    <fieldset class="about-me-card" @click="details">
      <legend>{{prompt}}</legend>
      <p>{{introduction}}</p>
    </fieldset>
  </article>
</template>

<script>
export default {
  props: {
    prompt: {
      type: String,
      default: '无：'
    },
    introduction: {
      type: String,
      default: '无'
    },
    photo: {
      type: String,
      default: require('../../assets/avatar.jpg')
    }
  },
  data () {
    return {}
  },
  methods: {
    details () {
      console.log('understand me')
      this.$emit('detail')
    }
  }
}
</script>

