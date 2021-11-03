<template>
  <div class="carousel-wrapper">
    <client-only v-if="items.length > 0">
      <carousel v-bind="options" class="position-relative">
        <slide class="img-wrapper" v-for="item in items" :key="item.id">
          <div class="overlay position-absolute top-0">
            <div class="row">
              <!-- Image Block -->
              <div class="col-xl-6 order-xl-last d-none d-xl-block">
                <div class="image h-100 position-relative">
                  <img
                    :src="`${img_url}${item.poster_path}`"
                    :alt="item.original_title"
                  />
                </div>
              </div>

              <!-- Context Block -->
              <div class="col-xl-6 order-xl-first">
                <div
                  class="
                    position-relative
                    p-4
                    context
                    d-flex
                    justify-content-center
                    align-items-start
                    flex-column
                    h-100
                  "
                >
                  <div
                    class="
                      btn-light
                      py-1
                      px-2
                      position-absolute
                      text-capitalize
                      lang
                    "
                  >
                    {{ item.original_language }}
                  </div>
                  <div class="d-none d-md-block lg-txt">
                    <h2 v-if="item.title">{{ item.title }}</h2>
                    <h2 v-else>{{ item.name }}</h2>
                    <h6 class="text-muted btn-sm fst-italic">
                      {{ item.release_date }}
                    </h6>
                    <p>{{ item.overview }}</p>
                  </div>
                  <div class="d-block d-md-none sm-txt">
                    <h2 v-if="item.title">{{ item.title }}</h2>
                    <h2 v-else>{{ item.name }}</h2>
                    <p>{{ item.overview.substring(0, 110) }}...</p>
                  </div>

                  <div class="rate">
                    <div class="d-flex gap-2" v-if="item.vote_average > 7">
                      <h4>
                        <i class="bi-star-fill"></i>
                        {{ item.vote_average.toFixed(1) }}
                      </h4>
                      <h4 class="text-muted text-uppercase">
                        | {{ item.media_type }}
                      </h4>
                    </div>
                    <div class="d-flex gap-2" v-else>
                      <h4>
                        <i class="bi-star-half"></i>
                        {{ item.vote_average.toFixed(1) }}
                      </h4>
                      <h4 class="text-muted text-uppercase">
                        | {{ item.media_type }}
                      </h4>
                    </div>
                  </div>

                  <div class="btns">
                    <nuxt-link
                      :to="`${item.media_type}/${item.id}`"
                      class="btn btn-light rounded-pill mt-3 px-3 py-2 button"
                    >
                      <i class="bi bi-headset-vr"></i> See This!
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            :src="`${img_url}${item.backdrop_path}`"
            :alt="item.original_title"
          />
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      items: [],
      img_url: 'https://image.tmdb.org/t/p/w500',
      api_key: 'api_key=9ab45b4f4d577cd87a3f36c8f6ed2963',
      base_URL: 'https://api.themoviedb.org/3',

      options: {
        loop: true,
        perPage: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        paginationEnabled: false,
        speed: 900,
      },
    }
  },

  // Fetch the data
  created() {
    axios(`${this.base_URL}/trending/all/day?${this.api_key}`)
      .then((res) => {
        this.items = res.data.results
      })
      .catch((error) => console.error(error))
  },
}
</script>

<style lang="scss">
.carousel-wrapper {
  .overlay {
    height: $full;
    width: $full;
    background-color: $darkFaded;
    backdrop-filter: $blur;

    .image {
      img {
        width: 80%;
        height: 100%;
        object-fit: cover;
        box-shadow: $darkShadow;
      }
    }

    .context {
      .lang {
        top: 10vh;
        left: 25px;
        font-size: 1.1rem;
        box-shadow: $darkShadow;
        border-radius: 7px;
      }
      .lg-txt {
        h2 {
          font-size: $headlg;
          font-weight: 600;
          margin-bottom: 30px;
        }
      }

      .btns {
        .button {
          transition: 0.2s;
          box-shadow: $darkShadow;

          &:hover {
            color: $light;
            background-color: $dark;
            border: 1px solid $dark;
          }
        }
      }
    }
  }
  .img-wrapper {
    height: $full;
    width: $full;

    img {
      object-fit: cover;
      height: $full;
      width: $full;
    }
  }
}
/* Media Query */
@media (max-width: 1024px) {
  .carousel-wrapper {
    .overlay {
      .context {
        align-items: center !important;
        text-align: center;
        padding-top: 15vh;
        margin-top: 5vh;

        .lang {
          top: 5vh;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .carousel-wrapper {
    .overlay {
      .context {
        .lang {
          padding: 5px !important;
          font-size: 0.8rem;
          top: 3vh;
        }

        .lg-txt {
          h2 {
            font-size: 2.5rem;
          }
          p {
            font-size: $sm;
          }
        }

        .rate {
          h4 {
            font-size: 1rem;
          }
        }

        .btns {
          .button {
            font-size: $sm;
            padding: 6px 12px !important;
          }
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .carousel-wrapper {
    .overlay {
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(3px);
      .context {
        padding-top: 10vh;
        margin-top: 4vh;
        .lang {
          top: auto;
          bottom: 5vh;
          left: 4vw;
          padding: 1px 2px !important;
          font-size: 0.6rem;
        }

        .sm-txt {
          h2 {
            font-size: 1rem;
          }
          p {
            font-size: 0.6rem;
          }
        }

        .rate {
          h4 {
            font-size: $sm;
          }
        }

        .btns {
          .button {
            font-size: 0.6rem;
            padding: 3px 9px !important;
          }
        }
      }
    }
  }
}
@media (max-width: 320px) {
  .carousel-wrapper {
    display: none;
  }
}
</style>
