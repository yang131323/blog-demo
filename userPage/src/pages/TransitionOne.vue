<style lang="less" scoped>
.bounce-enter-active {
  animation: bounce .5s;
}
.bounce-leave-active {
  animation: bounce .5s reverse;
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<template>
  <transition name="bounce">
    <img src="../assets/mountain-landscape-2031539.jpg" alt="mountain-landscape" width="100%" height="100%" @click="toTwo" v-if="show">
    <!-- <a-icon type="bars"/> -->
  </transition>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    toTwo () {
      this.$router.push('/two')
    }
  }
}
</script>
