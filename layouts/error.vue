<template>
  <div class="error">
    <div class="image">
      <img
        src="https://cdn.dribbble.com/users/935591/screenshots/15664793/media/90c2e1253482c777325f6172940087e3.jpeg?compress=1&resize=1200x900"
        alt="page not found"
        class="img-fluid"
      />
    </div>
    <div class="context text-center mb-4">
      <h3>Error 404</h3>
      <p>Ooops!! Seems this page not available right now!</p>
      <nuxt-link to="/" class="btn btn-light rounded-pill">
        <i class="bi-house"></i> Back Home
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Page not found',
  },
}
</script>

<style lang="scss" scoped>
.error {
  min-height: 100vh;
  @include center(column);
  .image {
    height: 50vh;
    margin: auto;

    img {
      border-radius: 5%;
      height: $full;
      width: $full;
      object-fit: contain;
    }
  }
  @media (max-width: 480px) {
    .image {
      height: auto;
      width: 85vw;
    }
  }
}
</style>
