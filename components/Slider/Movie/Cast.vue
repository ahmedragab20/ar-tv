<template>
  <div class="cast container">
    <div class="cast-card my-4">
      <nuxt-link :to="`/artist/${item.id}`">
        <div class="image">
          <img :src="img" :alt="item.original_name" v-if="item.profile_path" />
          <img
            src="https://picsum.photos/200/200?grayscale"
            :alt="item.original_name"
            v-else
          />
          <h4
            class="text-capitalize mt-1"
            v-if="item.original_name.length <= 13"
          >
            {{ item.original_name }}
          </h4>
          <h4 class="text-capitalize mt-1 text-text-muted" v-else>
            {{ item.original_name.substring(0, 13) }}...
          </h4>
          <!-- <div class="context">
          <h5 class="text-capitalize" v-if="item.original_name.length <= 15">
            {{ item.character }}
          </h5>
          <div class="text-capitalize" v-else>
            <h6>{{ item.character.substring(0, 20) }}...</h6>
          </div>
          <h6 class="text-capitalize text-muted">
            {{ item.known_for_department }}
          </h6>
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
  },
}
</script>

<style lang="scss" scoped>
.cast {
  margin: 5px;

  .cast-card {
    text-align: center;

    a {
      color: $light;

      .image {
        position: relative;
        width: 100px;
        height: 100px;
        margin: auto;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          transform: scale(1.1);
        }

        img {
          border-radius: 50%;
          width: $full;
          height: $full;
          object-fit: cover;
          box-shadow: $darkShadow;
          transition: $transition;
        }

        h4 {
          transition: $transition;
          opacity: 0.5;
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
}
</style>
