<style lang="less" scoped>

</style>

<template>
  <transition>
    <img src="../assets/forest-931706_1920.jpg" alt="forest" width="100%" @click="toOne">
  </transition>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    toOne () {
      this.$router.push('/')
    }
  }
}
</script>
