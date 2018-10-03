<style lang="less" scoped>

</style>

<template>
  <transition>
    <img src="../assets/mountain-landscape-2031539.jpg" alt="mountain-landscape" width="100%" height="100%" @click="toTwo">
  </transition>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    toTwo () {
      this.$router.push('/two')
    }
  }
}
</script>
