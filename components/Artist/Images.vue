<template>
  <div class="images mt-2">
    <figure>
      <client-only>
        <carousel v-bind="options" class="position-relative">
          <slide
            class="img-wrapper"
            v-for="item in artistImagesData"
            :key="item.id"
          >
            <div class="img">
              <img
                :src="`${img_url}${item.file_path}`"
                :alt="item.name"
                class="img-fluid"
                v-if="item.file_path"
              />
              <img
                src="https://picsum.photos/200/200?grayscale"
                :alt="item.name"
                v-else
              />
            </div>
          </slide>
        </carousel>
      </client-only>
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img_url: 'https://image.tmdb.org/t/p/w500',
      options: {
        loop: true,
        perPage: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        paginationEnabled: false,
        speed: 900,
      },
    }
  },
  computed: {
    artistImagesData() {
      return this.$store.state.ArtistImages
    },
  },
  mounted() {
    console.log(this.artistImagesData)
  },
}
</script>

<style lang="scss" scoped>
.images {
  .img-wrapper {
    height: 500px;
    .img {
      width: 70%;
      margin: auto;

      img {
        border-radius: 20px;
        box-shadow: $darkShadow;
      }
    }
  }
}
</style>
