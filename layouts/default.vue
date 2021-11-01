<template>
  <div>
    <GeneralOnLoad />
    <GeneralNavBar />
    <Nuxt />
    <GeneralFooter />
  </div>
</template>

<script>
export default {
  mounted() {
    return setInterval(this.$store.commit('updateFavStorage'))
  },
}
</script>

<style lang="scss" scoped></style>
