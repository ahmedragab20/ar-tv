<template>
  <div class="movies">
    <div class="popular container mt-5">
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

    const showsPopular = $axios(`tv/popular?${api_key}`).then((res) => {
      store.commit('getShowPopular', res.data.results)
    })

    return { showsPopular }
  },
}
</script>

<style lang="scss" scoped></style>
