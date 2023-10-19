<template>
  <router-link :to="to" class="block px-4 py-2 transition-colors duration-300 rounded hover:bg-purple-200">
    <slot>Link</slot>
  </router-link>
</template>

<script setup>
const props = defineProps({
  to: Object,
});
</script>