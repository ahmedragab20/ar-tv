<template>
  <footer class="container-fluid px-3">
    <div class="row">
      <div class="col-6">
        <a
          href="https://www.linkedin.com/in/ahmed-ragab-bb75541b3/"
          target="_blank"
          ><i class="bi bi-linkedin"></i> LinkedIn accout</a
        >
      </div>
      <div class="col-6">
        <h6 class="text-md-end">Created by Ahmed Ragab</h6>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  padding: 60px 0 30px 0;

  a {
    padding: 8px 10px;
    color: $light;
    border-radius: 10px;
    text-decoration: none;
  }
}

@media (max-width: 480px) {
  footer {
    * {
      text-align: center;
    }
  }
}
@media (max-width: 320px) {
  footer {
    * {
      font-size: 0.75rem;
    }
    a {
      white-space: nowrap;
    }
  }
}
</style>
