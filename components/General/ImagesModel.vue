<template>
  <div class="background" @click.self="closeModel">
    <div class="model-container">
      <img src="https://picsum.photos/1200/800?grayscale" alt="" width="300" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    props: ['img'],
    colseModel() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.background {
  @include center(column);

  position: fixed;
  inset: 0;
  height: 100vh;
  width: $full;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px);

  // .model-container {
  // }
}
</style>
