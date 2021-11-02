<template>
  <div class="layout" :class="{ lightMode: isLight }">
    <div class="mode" @click="swichMode">
      <span><i class="bi-lightbulb-fill"></i></span>
    </div>
    <GeneralOnLoad />
    <GeneralNavBar />
    <Nuxt />
    <GeneralFooter />
  </div>
</template>

<script>
export default {
  mounted() {
    return setInterval(this.$store.commit('updateFavStorage'))
  },
  data() {
    return {
      isLight: false,
    }
  },
  methods: {
    swichMode() {
      this.isLight = !this.isLight
    },
  },
}
</script>

<style lang="scss" scoped>
.layout {
  background: $darkBackground;

  .mode {
    position: fixed;
    bottom: 10px;
    right: 20px;
    height: 25px;
    width: 50px;
    border-radius: 30px;
    background-color: #999;
    cursor: pointer;
    z-index: 999 * 999;

    span {
      @include center(row);

      width: 25px;
      height: 25px;
      background-color: #111;
      border-radius: 50%;
      position: absolute;
      transition: $transition;
      transform: translateX(0) translateY(0px) scale(0.9);
    }
  }
}
</style>
