<template>
  <div class="transition bg-white shadow rounded-xl hover:scale-105 focus:scale-105 active:scale-100">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" class="object-cover w-full h-48 rounded-t-xl">
        </router-link>
        <div class="p-3">
          <h3 class="font-bold">{{ meal.strMeal }}</h3>
          <p class="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, omnis fuga vero deserunt molestias veritatis!
          </p>
          <div>
            <YoutubeButton :href="meal.strYoutube">
              YouTube
            </YoutubeButton>
          </div>
        </div>
      </div>
</template>

<script setup>
import YoutubeButton from './YoutubeButton.vue';

const { props } = defineProps({
  meal: Object,
})
</script>