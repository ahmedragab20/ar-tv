<template>
  <div class="show">
    <div class="popular container mt-5">
      <div v-if="!popularShow.adults">
        <div class="row">
          <div
            class="col-xl-3 col-lg-4 col-md-6"
            v-for="item in popularShow"
            :key="item.id"
          >
            <ShowsPopular :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Popular Tv Shows',
  },
  computed: {
    popularShow() {
      return this.$store.state.ShowPopular
    },
  },
  // Fetching the data
  async asyncData({ $axios, store }) {
    const api_key = 'api_key=9ab45b4f4d577cd87a3f36c8f6ed2963'

    const showsPopular = $axios(`tv/popular?${api_key}`)
      .then((res) => {
        store.commit('getShowPopular', res.data.results)
      })
      .catch((err) => console.error(err))

    return { showsPopular }
  },
}
</script>

<style lang="scss" scoped>
.show {
  min-height: 95vh;
}
</style>
