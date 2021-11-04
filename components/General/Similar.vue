<template>
  <div class="similar">
    <client-only>
      <!-- <vue-flux>
        <img src="https://picsum.photos/1200/768" alt="" class="img-fluid" />
      </vue-flux> -->
      <div>
        <vue-flux
          :options="vfOptions"
          :transitions="vfTransitions"
          ref="slider"
        >
          <!-- :images="`${img_url}${}`" -->
          <template v-slot:preloader>
            <flux-preloader />
          </template>
          <!--
        <template v-slot:caption>
          <flux-caption />
        </template> -->

          <template v-slot:controls>
            <flux-controls />
          </template>

          <template v-slot:pagination>
            <flux-pagination />
          </template>

          <template v-slot:index>
            <flux-index />
          </template>
        </vue-flux>
      </div>
    </client-only>
  </div>
</template>

<script>
// import { VueFlux, FluxControls } from 'vue-flux/dist-ssr/vue-flux.umd.min.js'
import {
  VueFlux,
  // FluxCaption,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader,
} from 'vue-flux/dist-ssr/vue-flux.umd.min.js'

import 'vue-flux/dist-ssr/vue-flux.css'

export default {
  components: {
    VueFlux,
    // FluxCaption,
    FluxControls,
    FluxIndex,
    FluxPagination,
    FluxPreloader,
  },

  data() {
    return {
      vfOptions: {
        autoplay: true,
        allowFullscreen: true,
        bindKeys: true,
        delay: 1000,
        rows: 0,
        cols: 5,
        tileDuration: 300,
        tileDelay: 100,
        easing: 'linear',
      },
      img_url: 'https://image.tmdb.org/t/p/w500',
      vfImages: [],
      vfTransitions: ['slide'],
      // vfTransitions: [ 'fade', 'cube', 'book', 'wave' ],
      // vfCaptions: [
      //   'Caption for image 1',
      //   'Caption for image 2',
      //   'Caption for image 3',
      // ],
    }
  },
  computed: {
    moviesImagesData() {
      return this.$store.getters.movieImagesGetter
    },
    img() {
      this.moviesImagesData.forEach((item) => {
        return item === this.vfImages
      })
    },
  },
  mounted() {
    console.log(this.moviesImagesData)
  },
}
</script>

<style lang="scss" scoped></style>
