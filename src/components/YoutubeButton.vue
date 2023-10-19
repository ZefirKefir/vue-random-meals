<template>
  <a
    :href="href"
    target="_blank"
    class="inline-block px-4 py-2 text-white transition-colors duration-300 bg-red-500 rounded hover:bg-red-700"
  >
  <slot>YouTube</slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>