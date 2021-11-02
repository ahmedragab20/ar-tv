<template>
  <nav class="position-fixed top-0 w-100">
    <div
      class="
        container-fluid
        d-flex
        justify-content-between
        align-items-center
        py-1
      "
    >
      <div class="logo">
        <h5 class="title pt-1">
          <nuxt-link to="/" class="fw-bolder">
            <i class="bi bi-tv"></i> ARTV
          </nuxt-link>
        </h5>
      </div>
      <div class="burger" :class="{ active: isActive }" @click="listHandler">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <div class="list" :class="{ active: isActive }">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mb-3">
              <div class="left">
                <div class="context">
                  <h2 class="list-title fw-bold mb-3">
                    <nuxt-link to="/" class="fw-bolder">
                      <i class="bi bi-tv"></i> ARTV
                    </nuxt-link>
                  </h2>
                  <p class="list-p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores voluptatem dignissimos officia temporibus fuga ut
                    dolorem beatae? Autem deleniti aspernatur maiores numquam
                    officia magnam accusamus!
                  </p>
                </div>
                <div class="image">
                  <img
                    src="https://picsum.photos/800/400"
                    alt="Home"
                    class="img-fluid rounded-3"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="right">
                <ul class="links">
                  <div class="row">
                    <li>
                      <nuxt-link to="/" exact>Home</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/movie">Movies</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/tv">TV Shows</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/favourite">Favourite</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/search">Search</nuxt-link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="list-footer mt-5">
          <h6>Created by Ahmed Ragab &copy; 2021</h6>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      searchResults: [],
      searchTerm: '',
      searchData:
        'https://api.themoviedb.org/3/search/multi?api_key=9ab45b4f4d577cd87a3f36c8f6ed2963',
    }
  },
  methods: {
    listHandler() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  @include between(row);
  z-index: 998;
  background-color: $liteDarkBackground;
  backdrop-filter: blur(10px);

  .logo {
    .title {
      a {
        color: $light;
        font-size: 1.5rem;
      }
    }
  }

  .burger {
    padding: 1px;
    cursor: pointer;
    z-index: 1000;

    div {
      margin: 5px;
      height: 1px;
      width: 20px;
      background-color: $light;
      transition: all 0.6s ease-in-out;
    }

    &.active {
      .line1 {
        transform: translate(0, 9px) rotate(45deg);
      }
      .line2 {
        opacity: 0;
      }
      .line3 {
        transform: translate(0, -3px) rotate(-45deg);
      }
    }
  }

  .list {
    @include center(column);
    padding: 20px 0;
    * {
      color: $light;
    }

    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    width: $full;
    height: 100vh;
    z-index: 999;
    transition: all 0.6s ease-in-out;

    //active class options
    opacity: 0;
    pointer-events: none;
    transform: scale(0.8) translateX(-100%);

    &.active {
      opacity: 1;
      pointer-events: all;
      transform: scale(1) translateX(0%) rotate(0deg);
    }

    .left {
      .context {
        margin-bottom: 20px;

        .list-p {
          font-size: 0.9rem;
        }
      }

      .image {
        img {
          box-shadow: $darkShadow;
          transition: $transition;

          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }

    .right {
      height: 100%;
      @include center(column);

      .links {
        @include around(column);

        height: $full - 50;
        width: $full;

        li {
          margin: 10px 0;

          a {
            display: block;
            text-align: center;
            &:hover {
              text-decoration: underline;
            }
          }
          .nuxt-link-active {
            padding: 10px 30px;
            background-color: $light;
            color: $dark;
            border-radius: 5px;

            &:hover {
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}

/* Media Query */

@media (max-width: 480px) {
  nav {
    .list-p {
      display: none !important;
    }
    .list {
      .right {
        height: auto;
        .links {
          @include center(column);
          width: $full;

          li {
            width: $full;
            text-align: center;
            a {
              display: block;
              transform: translateX(-15px);
              width: $full;
              margin: 5px auto;

              figure {
                span {
                  display: none;
                }
              }

              &.nuxt-link-active {
                padding: 5px 10px;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 320px) {
  p {
    font-size: 0.7rem !important;
  }
}
</style>
