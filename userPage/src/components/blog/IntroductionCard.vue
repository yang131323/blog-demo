<style lang="less" scoped>
@import '../common/color.less';


.personal-profile-card {
  display: flex;
  flex-direction: column;
  margin: -50px 10*@vw 0 10*@vw;
  padding: 15 * @vw;
  width: 500 * @vw;
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

  .personal-message-card {
    margin: 30 * @vw;
    padding: 20px 0 0 0;
    border-top: 1*@vw solid #ff1744;

    p {
      padding: 0;
      margin: 15*@vw 0 0 0;
      text-align: left;
      color: @iBackground;
      font-size: 20 * @vw;
      overflow: hidden; // 防止横向溢出
      text-overflow: ellipsis; // 显示省略
    }
  }
}
</style>

<template>
  <article class="personal-profile-card">
    <img :src="photo" alt="logo" width="120" heihgt="120">
    <section class="personal-message-card">
      <p v-for="(value, key) in information" :key="key">{{mapPrompt(prompt, key)}}
        <span>{{value}}</span>
      </p>
    </section>
  </article>
</template>

<script>
import { mapPrompt } from '@/utils'

export default {
  props: {
    prompt: {
      type: Object,
      default: () => {}
    },
    information: {
      type: Object,
      default: () => {}
    },
    photo: {
      type: String,
      default: require('../../assets/logoO.png')
    }
  },
  data () {
    return {}
  },
  methods: {
    mapPrompt(...arg) {
      return mapPrompt(...arg)
    }
  }
}
</script>

