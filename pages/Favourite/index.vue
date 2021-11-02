<template>
  <div class="favourites container mt-5">
    <div v-if="items.length > 0">
      <div class="row">
        <div
          class="col-xl-3 col-lg-4 col-md-6"
          v-for="item in items"
          :key="item.id"
        >
          <GeneralFavourite :item="item" />
        </div>
      </div>
    </div>
    <div v-else class="text-center pt-5">
      <div class="image mt-3">
        <img src="~/assets/empty.webp" alt="empty list" class="img-fluid" />
      </div>
      <h6 class="my-3 section-title">You didn't add anything yet!</h6>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.favMovie
    },
  },
}
</script>

<style lang="scss" scoped>
.favourites {
  min-height: 95vh;

  .image {
    width: 50vh;
    height: 50vh;
    margin: auto;

    img {
      border-radius: 5%;
    }
  }

  @media (max-width: 410px) {
    .image {
      width: auto;
    }
  }
}
</style>
