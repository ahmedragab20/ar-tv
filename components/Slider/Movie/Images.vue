<template>
  <div class="images my-2">
    <!-- Images Model Block -->
    <!-- <div>
      <GeneralImagesModel />
    </div> -->

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
      showModel: false,
    }
  },
  computed: {
    img() {
      return this.img_url + this.item.file_path
    },
  },
}
</script>

<style lang="scss" scoped></style>
