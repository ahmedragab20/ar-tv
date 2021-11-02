<template>
  <div class="details mt-3">
    <div class="context">
      <div class="title">
        <h2 v-if="item.name.length < 20" class="h1 fw-bold section-title">
          {{ item.name }}
        </h2>
        <h3 v-else class="fw-bold section-title">{{ item.name }}</h3>
        <span class="text-muted">{{ item.known_for_department }}</span>
        <p class="text-muted fst-italic section-title" v-if="item.birthday">
          {{ item.birthday }}
        </p>
        <p class="text-muted fst-italic section-title" v-if="item.deathday">
          - {{ item.deathday }}
        </p>
      </div>
      <div class="bio my-3 section-title">
        <p>{{ item.biography }}</p>
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
    }
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
  }
}
</style>
