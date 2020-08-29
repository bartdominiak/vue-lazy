<template>
  <picture>
    <slot />

    <lazy-image
      :src="src"
      :alt="alt"
    />
  </picture>
</template>

<script>
import LazyImage from './LazyImage.vue'

export default {
  components: {
    LazyImage
  },
  props: {
    src: {
      required: true,
      type: String
    },
    alt: {
      type: String,
      default: () => null
    }
  }
}
</script>
