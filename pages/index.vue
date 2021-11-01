<template>
  <div class="Home">
    <HomeSlider />
    <div class="trending-container container mt-5">
      <h2 class="text-center mb-3 text-muted">Trending Today</h2>
      <div class="row">
        <div
          class="col-xl-3 col-lg-4 col-md-6"
          v-for="item in items"
          :key="item.id"
        >
          <HomeTrending :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  head: {
    title: 'Home',
  },
  data() {
    return {
      items: [],
      img_url: 'https://image.tmdb.org/t/p/w500',
      api_key: 'api_key=9ab45b4f4d577cd87a3f36c8f6ed2963',
      base_URL: 'https://api.themoviedb.org/3',
    }
  },
  // Fetch the data
  mounted() {
    axios(`${this.base_URL}/trending/all/day?${this.api_key}`)
      .then((res) => {
        this.items = res.data.results
      })
      .catch((error) => console.error(error))
  },
}
</script>
