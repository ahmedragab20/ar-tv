<template>
  <div class="cast container">
    <div class="cast-card">
      <nuxt-link :to="`/artist/${item.id}`" class="text-light">
        <div class="image my-4">
          <img :src="img" :alt="item.original_name" v-if="item.profile_path" />
          <img
            src="https://picsum.photos/200/200?grayscale"
            :alt="item.original_name"
            v-else
          />
          <h4
            class="text-capitalize mt-2 section-title"
            v-if="item.original_name.length <= 10"
          >
            {{ item.original_name }}
          </h4>
          <h6 class="text-capitalize mt-2 section-title text-text-muted" v-else>
            {{ name }}...
          </h6>
          <!-- <div class="context">
          <h5 class="text-capitalize" v-if="item.original_name.length <= 10">
            {{ item.character }}
          </h5>
          <div class="text-capitalize" v-else>
            <h6>{{ character }}...</h6>
          </div>
          <h6 class="text-capitalize">{{ item.known_for_department }}</h6>
          <button class="btn btn-light rounded-pill btn-sm">
            <i class="bi-person-circle"></i> Profile
          </button>
        </div> -->
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      img_url: 'https://image.tmdb.org/t/p/w500',
    }
  },
  computed: {
    img() {
      return this.img_url + this.item.profile_path
    },
    name() {
      return this.item.original_name.substring(0, 10)
    },
    character() {
      return this.item.character.substring(0, 15)
    },
  },
}
</script>

<style lang="scss" scoped>
.cast {
  margin: 5px;

  .cast-card {
    text-align: center;

    .image {
      position: relative;
      width: 115px;
      height: 115px;
      margin: auto;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        transform: scale(1.1);

        // .context {
        //   opacity: 1;
        //   pointer-events: all;
        // }
      }

      img {
        border-radius: 50%;
        width: $full;
        height: $full;
        object-fit: cover;
        box-shadow: $darkShadow;
      }

      h4 {
        opacity: 0.6;
        font-size: $sm;
      }
      h6 {
        opacity: 0.6;
        font-size: $sm;
      }

      // .context {
      //   @include center(column);
      //   position: absolute;
      //   bottom: 0;
      //   left: 0;
      //   background-color: rgba(0, 0, 0, 0.6);
      //   backdrop-filter: $blur;
      //   width: $full;
      //   height: $full;
      //   margin: auto;
      //   border-radius: 50%;
      //   opacity: 0;
      //   pointer-events: none;
      //   transition: $transition;
      //   h5 {
      //     font-size: 1rem;
      //   }
      //   h6 {
      //     font-size: 0.9rem;
      //   }

      //   button {
      //     transition: $transition;

      //     &:hover {
      //       background-color: #000;
      //       color: #fff;
      //       border: 1px solid #000;
      //     }
      //   }
      // }
    }
  }
}
@media (max-width: 280px) {
  .image {
    width: 90px !important;
    height: 90px !important;
    transform: translateX(-20px);

    &:hover {
      transform: scale(1.1) translateX(-20px) !important;
    }
  }
}
</style>
