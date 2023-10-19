<template>
  <div class="flex flex-col items-center justify-center h-[80vh]">
    <h1 class="text-2xl font-bold uppercase text-purple-800/60 ">home</h1>
    <div class="flex gap-3 mt-5">
      <router-link class="px-4 py-2 transition-colors duration-300 rounded hover:bg-purple-200" :to="{name: 'byName'}">Search By Name</router-link>
      <router-link class="px-4 py-2 transition-colors duration-300 rounded hover:bg-purple-200" :to="{name: 'byLetter'}">Search By Letter</router-link>
      <router-link class="px-4 py-2 transition-colors duration-300 rounded hover:bg-purple-200" :to="{name: 'byIngredient'}">Search By Ingredient</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from '../axiosClient';

// const meals = computed(() => store.state.meals);
const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list');
  // console.log(response.data);
  ingredients.value = response.data;
})

</script>

<style>

</style>