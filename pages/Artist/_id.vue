<template>
  <div class="artist container mt-5">
    <!-- Details and Images -->
    <div class="details-images-container">
      <div class="row">
        <div class="col-md-6">
          <ArtistDetails :item="artistDetailsData" />
        </div>
        <div class="col-md-6">
          <ArtistImages />
        </div>
      </div>
    </div>
    <!-- Last Work BLock -->
    <div class="last-work">
      <h2 class="text-muted my-3 text-center" v-if="artistLastWorkData">
        Last Work
      </h2>
      <div class="row">
        <div
          class="col-xl-3 col-lg-4 col-md-6"
          v-for="item in artistLastWorkData"
          :key="item.id"
        >
          <ArtistLastWork :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.artistDetailsData.name,
    }
  },
  computed: {
    artistDetailsData() {
      return this.$store.state.ArtistDetails
    },
    artistLastWorkData() {
      return this.$store.state.ArtistLastWork
    },
  },
  async asyncData({ $axios, params, store }) {
    /* Artist Details */
    const api_key = 'api_key=9ab45b4f4d577cd87a3f36c8f6ed2963'
    const artistDetails = await $axios(`/person/${params.id}?${api_key}`)
      .then((res) => {
        if (res.data.id == params.id) {
          store.commit('getArtistDetails', res.data)
        }
      })
      .catch((err) => {
        if (err.state !== 200 || err.readyState !== 4) {
          console.log(err)
        }
      })
    const artistImages = await $axios(`/person/${params.id}/images?${api_key}`)
      .then((res) => {
        if (res.data.id == params.id) {
          store.commit('getArtistImages', res.data.profiles)
        }
      })
      .catch((err) => {
        if (err.state !== 200 || err.readyState !== 4) {
          console.log(err)
        }
      })
    const artistLastWork = await $axios(
      `/person/${params.id}/combined_credits?${api_key}`
    )
      .then((res) => {
        if (res.data.id == params.id) {
          store.commit('getArtistLastWork', res.data.cast)
        }
      })
      .catch((err) => {
        if (err.state !== 200 || err.readyState !== 4) {
          console.log(err)
        }
      })

    return { artistDetails, artistImages, artistLastWork }
  },
}
</script>

<style lang="scss" scoped>
.artist {
  min-height: 95vh;
}
</style>
