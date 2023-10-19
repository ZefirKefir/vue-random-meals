<template>
  <div class="py-6 px-7">
    <h1 class="mb-4 text-4xl font-bold">Ingredients:</h1>
    <input type="text"
        v-model="keyword"
        class="w-full my-6 bg-white border-2 border-gray-200 rounded"
        placeholder="Search for Ingredients" />
    <router-link v-for="ingredient of computedIngredients" :key="ingredient.idIngredient"
      :to="{name: 'mealsByIngredient', params: {ingredient: ingredient.strIngredient}}"
      class="block p-3 mb-3 bg-white rounded shadow"
    >
      <h3 class="mb-2 text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { computed } from '@vue/reactivity';
import axiosClient from "../axiosClient";

const ingredients = ref([]);
const keyword = ref('');

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter(item => item.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()));
});

onMounted(() => {
  axiosClient.get('list.php?i=list')
    .then(({ data }) => {
      ingredients.value = data.meals;
    })
});

</script>