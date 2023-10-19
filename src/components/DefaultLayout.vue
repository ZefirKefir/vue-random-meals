<template>
  <div class="min-h-[100vh] bg-gray-100">
    <Navbar />
    <main class="h-full">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
</script>