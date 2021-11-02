<template>
  <div class="shows-popular">
    <div v-if="showsDetailsData.id == $route.params.id">
      <!-- Tv Show Details -->
      <SliderShowDetails :item="showsDetailsData" />
      <!-- Tv show Videos -->
      <div class="shows-videos container">
        <h2
          class="text-center fw-bold text-muted mt-5 section-title"
          v-if="showsVideosData"
        >
          Some Videos
        </h2>
        <div class="row">
          <div
            class="col-lg-4 col-md-6"
            v-for="video in showsVideosData"
            :key="video.id"
          >
            <SliderShowVideos :item="video" />
          </div>
        </div>
      </div>
      <!-- Tv shows Cast & images Container -->
      <div class="shows-cast-container">
        <div class="row">
          <div class="col-md-6">
            <!-- Tv Show Images -->
            <div class="show-images container">
              <h2
                class="text-center fw-bold text-muted mt-5 section-title"
                v-if="showsImagesData"
              >
                Some Images
              </h2>
              <div class="row">
                <div
                  class="col-md-6"
                  v-for="image in showsImagesData"
                  :key="image.id"
                >
                  <SliderShowImages :item="image" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <!-- Tv Show Cast -->
            <div class="shows-cast container text-capitalize section-title">
              <h2
                class="text-center fw-bold text-muted mt-4"
                v-if="showsCastData"
              >
                The Cast
              </h2>
              <div class="row">
                <div
                  class="col-xl-3 col-lg-4 col-6"
                  v-for="cast in showsCastData"
                  :key="cast.id"
                >
                  <SliderShowCast :item="cast" />
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
      title: this.showsDetailsData.name,
    }
  },
  computed: {
    showsDetailsData() {
      return this.$store.state.ShowDetails
    },
    showsVideosData() {
      return this.$store.state.ShowVideos
    },
    showsCastData() {
      return this.$store.state.ShowCast
    },
    showsImagesData() {
      return this.$store.state.ShowImages
    },
  },
  async asyncData({ $axios, params, store }) {
    const api_key = 'api_key=9ab45b4f4d577cd87a3f36c8f6ed2963'

    /* Shows Details */
    const tvDetails = await $axios(`/tv/${params.id}?${api_key}`)
      .then((res) => {
        if (res.data.id == params.id) {
          store.commit('getShowDetails', res.data)
        }
      })
      .catch((err) => {
        if (err.readyState !== 4) {
          console.log(err)
        }
      })

    /* Shows Videos */
    const tvVideos = await $axios(`/tv/${params.id}/videos?${api_key}`)
      .then((res) => {
        if (res.data.id == params.id) {
          store.commit('getShowVideos', res.data.results)
        }
      })
      .catch((err) => {
        if (err.state !== 200 || err.readyState !== 4) {
          console.log(err)
        }
      })
    /* Shows Cast */
    const tvCast = await $axios(`/tv/${params.id}/credits?${api_key}`)
      .then((res) => {
        if (res.data.id == params.id) {
          store.commit('getShowCast', res.data.cast)
        }
      })
      .catch((err) => {
        if (err.state !== 200 || err.readyState !== 4) {
          console.log(err)
        }
      })

    /* Shows Images */
    const tvImages = await $axios(`/tv/${params.id}/images?${api_key}`)
      .then((res) => {
        if (res.data.id == params.id) {
          store.commit('getShowImages', res.data.backdrops)
        }
      })
      .catch((err) => {
        if (err.state !== 200 || err.readyState !== 4) {
          console.log(err)
        }
      })
    return {
      tvDetails,
      tvVideos,
      tvCast,
      tvImages,
    }
  },
}
</script>

<style lang="scss" scoped></style>
