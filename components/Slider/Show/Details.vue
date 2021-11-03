<template>
  <div class="details container">
    <div class="overlay">
      <div class="img">
        <img
          v-if="item.backdrop_path"
          :src="`${img_url}${item.backdrop_path}`"
          alt="background image"
        />
        <img
          v-else
          src="`https://picsum.photos/1080/768"
          alt="background image"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-xl-6 order-xl-last">
        <div class="poster">
          <img :src="`${img_url}${item.poster_path}`" alt="" />
        </div>
      </div>
      <div class="col-xl-6 order-xl-first">
        <div class="context">
          <div class="txt">
            <div class="title d-flex gap-2">
              <h2
                class="my-1 fw-bold text-uppercase"
                v-if="item.name.length < 15"
              >
                {{ item.name }}
              </h2>
              <h3
                class="my-1 fw-bold text-uppercase"
                v-if="item.name.length >= 15"
              >
                {{ item.name }}
              </h3>
              <div class="lang">
                <p class="text-capitalize">{{ item.original_language }}</p>
              </div>
            </div>
            <div class="underheader d-flex gap-2">
              <div class="rate d-flex">
                <div class="d-flex" v-if="item.vote_average > 7">
                  <h6>
                    <i class="bi-star-fill"></i>
                    {{ rate }}
                  </h6>
                </div>
                <div class="d-flex gap-2" v-else>
                  <h6>
                    <i class="bi-star-half"></i>
                    {{ rate }}
                  </h6>
                </div>
              </div>

              <div class="genres d-flex gap-2">
                <h6 class="text-uppercase" v-for="gen in genres" :key="gen.id">
                  <i class="bi-dot text-muted"></i> {{ gen.name }}
                </h6>
              </div>
            </div>
            <div class="overview mt-3 mb-1">
              <p>{{ item.overview }}</p>
            </div>
            <div class="production">
              <h6>Production Companies</h6>
              <figure>
                <client-only>
                  <carousel v-bind="options" class="position-relative">
                    <slide
                      class="img-wrapper"
                      v-for="production in production_companies"
                      :key="production.id"
                    >
                      <div class="production-card overflow-hidden">
                        <div class="img">
                          <img
                            :src="`${img_url}${production.logo_path}`"
                            :alt="production.name"
                            width="80"
                            v-if="production.logo_path"
                          />
                          <img
                            src="https://picsum.photos/200/200?grayscale"
                            :alt="production.name"
                            width="80"
                            v-else
                          />
                        </div>
                      </div>
                    </slide>
                  </carousel>
                </client-only>
              </figure>
            </div>
            <div
              class="btns d-flex justify-content-start align-items-center gap-2"
            >
              <a
                :href="item.homepage"
                target="_blank"
                class="rounded-pill btn btn-light shadow"
              >
                Official Website <i class="bi bi-arrow-up-right-circle"></i>
              </a>
              <button
                class="
                  btn btn-danger
                  rounded-circle
                  d-flex
                  justify-content-center
                  align-items-center
                  shadow
                "
                style="width: 40px; height: 40px"
                :disabled="isAdded"
                @click.once="addToFavourie"
              >
                <i class="bi bi-suit-heart-fill"></i>
              </button>
            </div>
          </div>
          <transition name="progress" appear="">
            <b-alert
              :show="dismissCountDown"
              variant="success"
              @dismiss-count-down="countDownChanged"
              @dismissed="dismissCountDown = 0"
              class="progress-bar progress-bar-animated"
            >
              <p>{{ dismissCountDown }} Added To Your Favourite</p>
              <b-progress
                variant="dark"
                :max="dismissSecs"
                :value="dismissCountDown"
                height="4px"
              ></b-progress>
            </b-alert>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      img_url: 'https://image.tmdb.org/t/p/w500',
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      isAdded: false,
      options: {
        loop: true,
        perPage: 4,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        paginationEnabled: false,
        speed: 900,
      },
    }
  },
  computed: {
    rate() {
      return this.item.vote_average.toFixed(1)
    },
    genres() {
      return this.item.genres
    },
    production_companies() {
      return this.item.production_companies
    },
  },
  methods: {
    addToFavourie(dismissCountDown) {
      this.isAdded = true
      this.$store.dispatch('favShowData')
      this.dismissCountDown = dismissCountDown
      this.dismissCountDown = this.dismissSecs
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
  },
}
</script>

<style lang="scss" scoped>
.details {
  margin-top: 10vh;
  margin-bottom: 70px;
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    z-index: 2;

    .img {
      width: 100%;
      height: 100%;
      position: relative;
      inset: 0;

      &::after {
        content: '';
        background: linear-gradient(120deg, #00000075, #303030c0);
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        filter: blur(10px);
        color: #0000004f;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: blur(10px);
      }
    }
  }
  .row {
    position: relative;
    z-index: 3;

    .poster {
      @include center(row);

      img {
        width: 70%;
        height: 70%;
        object-fit: cover;
        border-radius: 20px;
        box-shadow: $darkShadow;
      }
    }
    .context {
      .title {
        h2 {
          font-size: $headlg;
          text-shadow: $txtShadow;
        }
      }

      .overview {
        font-size: $sm;
      }

      .production {
        h6 {
          text-shadow: $txtShadowLite;
        }

        .production-card {
          margin: 5px 0;
          position: relative;

          .img {
            @include center(row);
            width: 80px;
            height: 80px;
            img {
              width: $full;
              height: $full;
              object-fit: contain;
              border-radius: 10px;
            }
          }
        }
      }

      .progress-bar {
        z-index: 999;
        position: absolute;
        bottom: 0;
        right: 25px;
        background: linear-gradient(120deg, #80ff72af, #7ee7fa57);
        backdrop-filter: $blur;
        border-radius: 20px;
        border: none;
        box-shadow: $darkShadow;
      }
    }
  }
}
@media (max-width: 1024px) {
  .details {
    margin-bottom: 250px;
    .row {
      .poster {
        img {
          width: 50%;
          height: 50%;
        }
      }
      .context {
        margin-top: 10px;
        .title {
          h2 {
            font-size: $headsm;
          }
        }
        .progress-bar {
          bottom: 15%;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .details {
    margin-bottom: 150px;
    .row {
      .poster {
        img {
          width: 45%;
          height: 45%;
        }
      }
      .context {
        .title {
          h2 {
            font-size: $headsm;
          }
        }
      }
    }
  }
}
@media (max-width: 420px) and (min-width: 320px) {
  .details {
    margin-bottom: 50px;
    .row {
      .poster {
        img {
          width: 70%;
          height: 70%;
        }
      }
      .context {
        .title {
          h2 {
            font-size: $headsm;
          }
        }
      }
    }
  }
}
@media (max-width: 420px) {
  .details {
    margin-bottom: 0px;
    .row {
      .poster {
        img {
          width: 70%;
          height: 70%;
        }
      }
      .context {
        .title {
          h2 {
            font-size: $headsm;
          }
        }
        .underheader {
          flex-direction: column;

          .genres {
            h6 {
              font-size: $sm;

              i {
                display: none;
              }
            }
          }
        }
      }
    }
  }
}
/* Transition */
.progress-enter,
.progress-leave-to {
  transform: translate(60px);
  opacity: 0;
}
.progress-enter-active,
.progress-leave-active {
  transition: 1s;
}
</style>
