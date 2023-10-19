<template>
  <div class="grid grid-cols-1 gap-5 md:grid-cols-3 pb-7">
    <MealCard v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals" class="flex items-center h-[50vh] justify-center text-xl font-semibold text-gray-700">
    There are no meals :(
  </div>
</template>

<script setup>
import MealCard from './MealCard.vue';

const {meals} = defineProps({
  meals: Array,
});
</script>