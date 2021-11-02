<template>
  <div class="movie-page">
    <div v-if="moviesDetailsData.id == $route.params.id">
      <!-- Movie Details -->
      <SliderMovieDetails :item="moviesDetailsData" />
      <!-- Movie Videos -->
      <div class="movies-videos container">
        <h2
          class="text-center fw-bold text-muted mt-5 section-title"
          v-if="moviesVideosData"
        >
          Some Videos
        </h2>
        <div class="row">
          <div
            class="col-lg-4 col-md-6"
            v-for="video in moviesVideosData"
            :key="video.id"
          >
            <SliderMovieVideos :item="video" />
          </div>
        </div>
      </div>

      <!-- Movies Cast & Images Container -->

      <div class="cast-images-container">
        <div class="row">
          <div class="col-md-6">
            <!-- Movies Images -->
            <div class="movies-images container">
              <h2
                class="text-center fw-bold text-muted mt-5 section-title"
                v-if="moviesImagesData"
              >
                Some Images
              </h2>
              <div class="row">
                <div
                  class="col-md-6"
                  v-for="image in moviesImagesData"
                  :key="image.id"
                >
                  <SliderMovieImages :item="image" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <!-- Movie Cast -->
            <div class="movies-cast container text-capitalize">
              <h2
                class="text-center fw-bold text-muted mt-5 section-title"
                v-if="moviesCastData"
              >
                The Cast
              </h2>
              <div class="row">
                <div
                  class="col-xl-3 col-lg-4 col-6"
                  v-for="cast in moviesCastData"
                  :key="cast.id"
                >
                  <SliderMovieCast :item="cast" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.moviesDetailsData.title,
    }
  },
  mounted() {
    console.log(this.moviesDetailsData)
  },
  computed: {
    moviesDetailsData() {
      return this.$store.state.MovieDetails
    },
    moviesVideosData() {
      return this.$store.state.MovieVideos
    },
    moviesCastData() {
      return this.$store.state.MovieCast
    },
    moviesImagesData() {
      return this.$store.state.MovieImages
    },
  },
  async asyncData({ $axios, params, store }) {
    /* Movies Details */
    const api_key = 'api_key=9ab45b4f4d577cd87a3f36c8f6ed2963'
    const movieDetails = await $axios(`/movie/${params.id}?${api_key}`)
      .then((res) => {
        if (res.data.id == params.id) {
          store.commit('getMovieDetails', res.data)
        }
      })
      .catch((err) => {
        if (err.state !== 200 || err.readyState !== 4) {
          console.log(err)
        }
      })

    /* Movies Videos */
    const movieVideos = await $axios(`/movie/${params.id}/videos?${api_key}`)
      .then((res) => {
        if (res.data.id == params.id) {
          store.commit('getMovieVideos', res.data.results)
        }
      })
      .catch((err) => {
        if (err.state !== 200 || err.readyState !== 4) {
          console.log(err)
        }
      })

    /* Movies Cast */
    const movieCast = await $axios(`/movie/${params.id}/credits?${api_key}`)
      .then((res) => {
        if (res.data.id == params.id) {
          store.commit('getMovieCast', res.data.cast)
        }
      })
      .catch((err) => {
        if (err.state !== 200 || err.readyState !== 4) {
          console.log(err)
        }
      })

    /* Movie Images */
    const movieImages = await $axios(`/movie/${params.id}/images?${api_key}`)
      .then((res) => {
        if (res.data.id == params.id) {
          store.commit('getMovieImages', res.data.backdrops)
        }
      })
      .catch((err) => {
        if (err.state !== 200 || err.readyState !== 4) {
          console.log(err)
        }
      })
    return {
      movieDetails,
      movieVideos,
      movieCast,
      movieImages,
    }
  },
}
</script>

<style lang="scss" scoped></style>
