<template>
  <div class="header">
    <div class="header-inner">
      <NuxtLink to="/">
        <img
          role="menuitem"
          aria-label="Go to the home page"
          class="logo"
          alt="Semafour Logo"
          src="~/static/logo.png"
        >
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  @apply fixed top-0 left-0 w-screen h-24 bg-semafours bg-opacity-95 shadow-md;

  &-inner {
    @apply w-full max-w-screen-lg flex-grow pl-4 m-auto;

    img {
      @apply h-14 mt-4;
    }
  }
}
</style>
