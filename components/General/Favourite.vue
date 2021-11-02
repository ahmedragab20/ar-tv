<template>
  <div class="favourite" v-if="item.id">
    <div class="film-card m-2">
      <div class="poster">
        <img
          :src="`${img_url}${item.poster_path}`"
          :alt="item.original_title"
          class="img-fluid rounded-3 shadow-lg"
        />
        <span>{{ item.original_language }}</span>
      </div>
      <div
        class="
          context
          d-flex
          justify-content-center
          align-items-center
          flex-column
          gap-2
          text-center
          rounded-3
        "
      >
        <div
          class="
            rate
            d-flex
            justify-content-center
            align-items-center
            flex-column
          "
        >
          <div v-if="item.vote_average > 7">
            <i class="bi-star-fill"></i>
            <h2>{{ item.vote_average.toFixed(1) }}</h2>
          </div>
          <div v-else>
            <i class="bi-star-half"></i>
            <h2>
              {{ item.vote_average.toFixed(1) }}
            </h2>
          </div>
        </div>
        <button class="btn btn-danger px-3 btn-sm rounded-pill" @click="remove">
          <i class="bi-trash"></i> Remove
        </button>
      </div>
    </div>
    <div class="below m-2">
      <h6 v-if="item.title" class="section-title">{{ item.title }}</h6>
      <h6 v-else class="section-title">Alternative Title</h6>
      <p class="text-muted" v-if="item.release_date">
        {{ item.release_date }}
      </p>
      <p class="text-muted" v-if="item.first_air_date">
        {{ item.first_air_date }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  head: {
    title: 'Favourie',
  },
  data() {
    return {
      img_url: 'https://image.tmdb.org/t/p/w500',
    }
  },
  methods: {
    remove() {
      this.$store.dispatch('removeFavItem', this.item.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.favourite {
  .film-card {
    position: relative;

    &:hover {
      .context {
        opacity: 1;
        pointer-events: all;

        .btn {
          transform: translateY(0);
        }
      }
    }

    .poster {
      span {
        position: absolute;
        bottom: 10px;
        left: 10px;
        padding: 3px 5px;
        background-color: $light;
        border-radius: 7px 0;
        color: $dark;
        font-size: $sm;
        box-shadow: $darkShadow;
        font-weight: bold;
        letter-spacing: 0.5px;
        z-index: 9;
      }
    }

    .context {
      transition: $transition;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      inset: 0;
      width: $full;
      height: $full;
      background-color: $liteDark;
      border: 4px solid $light;
      backdrop-filter: $blur;

      .btn {
        transform: translateY(55px);
        transition: $transition;

        &:hover {
          background-color: $dark;
          color: $light;
          border: 1px solid $dark;
        }
      }
    }
  }

  .below {
    h6 {
      font-size: 0.9rem;
      text-transform: capitalize;
    }
    p {
      font-size: $sm;
    }
  }
}
</style>
