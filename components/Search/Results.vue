<template>
  <div class="search-results mt-3">
    <div class="film-card m-2">
      <div class="poster">
        <img
          :src="`${img_url}${item.poster_path}`"
          :alt="item.original_title"
          class="img-fluid rounded-3 shadow-lg"
          v-if="item.poster_path"
        />
        <img
          src="https://picsum.photos/800/1200"
          :alt="item.original_title"
          class="img-fluid rounded-3 shadow-lg"
          v-else
        />
        <span>{{ item.media_type }}</span>
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
            <h2>{{ item.vote_average }}</h2>
          </div>
          <div v-else>
            <i class="bi-star-half"></i>
            <h2>
              {{ item.vote_average }}
            </h2>
          </div>
        </div>
        <nuxt-link
          :to="`/${item.media_type}/${item.id}`"
          class="btn btn-light px-3 btn-sm rounded-pill"
        >
          <i class="bi bi-box-arrow-up-right"></i> View Details
        </nuxt-link>
      </div>
    </div>
    <div class="below m-2">
      <h6 v-if="item.title" class="section-title">{{ item.title }}</h6>
      <h6 v-else class="section-title">{{ item.name }}</h6>
      <p class="text-muted" v-if="item.first_air_date">
        {{ item.first_air_date }}
      </p>
      <p class="text-muted" v-else>
        {{ item.release_date }}
      </p>
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
}
</script>

<style lang="scss" scoped>
.search-results {
  .film-card {
    position: relative;

    &:hover {
      .context {
        opacity: 1;
        pointer-events: all;

        a {
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

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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

      a {
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
