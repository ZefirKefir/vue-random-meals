<template>
  <header class="flex items-center justify-between h-16 px-4 bg-white shadow header">
    <!-- <NavItem>fff</NavItem> -->
    <NavItem :to="{name: 'home'}">Home</NavItem>
    <div class="flex items-center h-full">
      <NavItem :to="{ name: 'byName' }">Search by name</NavItem>
      <NavItem :to="{ name: 'byLetter' }">By letter</NavItem>
      <NavItem :to="{ name: 'byIngredient' }">By ingredients</NavItem>
    </div>
  </header>
</template>

<script setup>
import NavItem from '../components/NavItem.vue'
</script>