<template>
  <div class="search container mt-5">
    <h2 class="text-center">You can here find anything you want!</h2>

    <form @submit.prevent="pressed" class="mt-2 mb-4">
      <input
        type="text"
        class="form-control rounded-0 text-center"
        id="exampleFormControlInput1"
        placeholder="Search..."
        v-model="inputText"
        @input="debounceSearch"
        autocomplete="off"
      />
    </form>
    <div class="search-results" v-if="inputText">
      <div class="row">
        <div
          class="col-xl-3 col-lg-4 col-md-6"
          v-for="item in searchResults"
          :key="item.id"
        >
          <SearchResults :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  head: {
    title: 'Search',
  },
  data() {
    return {
      inputText: '',
      searchResults: [],
      api_key: 'api_key=9ab45b4f4d577cd87a3f36c8f6ed2963',
      base_URL: 'https://api.themoviedb.org/3',
    }
  },
  methods: {
    debounceSearch(event) {
      clearTimeout(this.debounce)
      this.debounce = setTimeout(() => {
        if (event.target.value.length > 0) {
          this.pressed(event.target.value)
        }
      }, 200)
    },
    pressed() {
      axios(
        `${this.base_URL}/search/multi?${this.api_key}&query=${this.inputText}`
      )
        .then((res) => {
          this.searchResults = res.data.results
        })
        .catch((err) => console.error(err))
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  @include center(column);
  min-height: 95vh;

  h2 {
    letter-spacing: 2px;
    text-transform: capitalize;
    margin-bottom: 30px;
  }

  form {
    width: 80%;

    .form-control {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.363);
      caret-color: #fff;
      color: #fff;
      letter-spacing: 1px;
      transition: $transition;

      &:focus {
        box-shadow: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.829);
      }
    }
  }
}
</style>
