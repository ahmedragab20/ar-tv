<template>
  <div class="movies">
    <div class="popular container mt-5">
      <div class="row">
        <div
          class="col-xl-3 col-lg-4 col-md-6"
          v-for="item in popularMovie"
          :key="item.id"
        >
          <MoviesPopular :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Popular Movies',
  },
  computed: {
    popularMovie() {
      return this.$store.state.MoviePopular
    },
  },
  // Fetching the data
  async asyncData({ $axios, store }) {
    const api_key = 'api_key=9ab45b4f4d577cd87a3f36c8f6ed2963'

    const moviesPopular = await $axios(`movie/popular?${api_key}`).then(
      (res) => {
        store.commit('getMoviePopular', res.data.results)
      }
    )

    return { moviesPopular }
  },
}
</script>

<style lang="scss" scoped></style>
