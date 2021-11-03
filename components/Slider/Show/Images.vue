<template>
  <div class="images my-2">
    <div class="image-container">
      <img
        :src="img"
        class="img-fluid rounded-3 shadow-lg"
        v-if="item.file_path"
      />
      <img
        src="https://picsum.photos/1200/800?grayscale"
        class="img-fluid rounded-3 shadow-lg"
        v-else
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      img_url: 'https://image.tmdb.org/t/p/w500',
    }
  },
  computed: {
    img() {
      return this.img_url + this.item.file_path
    },
  },
}
</script>

<style lang="scss" scoped>
.image-container {
  img {
    transition: $transition;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
