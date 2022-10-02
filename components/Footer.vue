<template>
  <div class="footer">
    <div class="footer-inner">
      <div class="flex flex-row">
        <div class="w-1/2 p-4">
          MAKEathon 2022
        </div>
        <div class="w-1/2 p-4 text-right">
          With great support from metaphacts
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  @apply bg-gray-200 p-4 text-xs text-gray-700;

  &-inner {
    @apply w-full max-w-screen-lg flex-grow m-auto;

    svg {
      @apply w-36;
    }
  }

  a {
    @apply underline text-gray-700;
  }
}
</style>
