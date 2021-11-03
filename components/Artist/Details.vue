<template>
  <div class="details mt-3">
    <div class="context">
      <div class="title">
        <h2 v-if="item.name.length < 20" class="h1 fw-bold section-title">
          {{ item.name }}
        </h2>
        <h3 v-else class="fw-bold section-title">{{ item.name }}</h3>
        <span class="text-muted">{{ item.known_for_department }}</span>
        <div class="d-flex gap-2 text-muted">
          <p class="fst-italic section-title" v-if="item.birthday">
            {{ item.birthday }}
          </p>
          <p class="fst-italic section-title" v-if="item.deathday">
            - {{ item.deathday }}
          </p>
        </div>
      </div>
      <div class="bio my-3 section-title">
        <p :class="{ smTxt: isLong }">
          {{ item.biography.substring(0, 600) }}
          <span v-if="smTxt" @click.self="readmore" class="text-muted">
            ...Readmore
          </span>
        </p>
        <p v-if="isLong">
          {{ item.biography }}
          <span v-if="isLong" @click.self="readmore" class="text-muted">
            ...Readless
          </span>
        </p>
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
      isLong: false,
    }
  },
  computed: {
    smTxt() {
      return this.item.biography.length > 1000
    },
  },
  methods: {
    readmore() {
      this.isLong = !this.isLong
    },
  },
}
</script>

<style lang="scss" scoped>
.details {
  .context {
    .title {
      h2 {
        text-shadow: $txtShadow;
      }
      h3 {
        text-shadow: $txtShadowLite;
      }
    }
    p {
      font-size: 0.8rem;

      &.smTxt {
        display: none;
      }

      span {
        cursor: pointer;
      }
    }
  }
}
</style>
