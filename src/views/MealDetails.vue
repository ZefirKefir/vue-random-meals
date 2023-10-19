<template>
  <div class="w-[min(800px,100%)] mx-auto py-6">
    <h1 class="mb-5 text-5xl font-bold text-center">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full">
    <div class="grid grid-cols-1 py-2 text-lg md:grid-cols-3">
      <div>
        <strong class="font-bold">Category:</strong>
        {{' '}}
        <span v-if="meal.strCategory">
          {{ meal.strCategory }}
        </span>
        <span v-else>no category</span>
      </div>
      <div>
        <strong class="font-bold">Area:</strong>
        {{' '}}
        <span v-if="meal.strArea">
          {{ meal.strArea }}
        </span>
        <span v-else>no area</span>
      </div>
      <div>
        <strong class="font-bold">Tags:</strong>
        {{' '}}
        <!-- <span v-if="meal.strTags">
          {{ meal.strTags }}
        </span> -->
        <span v-if="meal.strTags" class="text-base italic cursor-pointer text-sky-600">
          <span v-for="tag of meal.strTags.split(',').filter(item => item)" :key="tag">
            #{{ tag }}{{ ' ' }}
          </span>
        </span>
        <span v-else>no tags</span>
      </div>
    </div>

    <!-- <div class="my-3">
      {{ meal.strInstructions }}
    </div> -->
    <!-- the better way to display -->
    <div class="my-3">
      <div>
        <p v-for="(p, i) of meal.strInstructions?.split('.')" :key="i">
          {{ (i !== meal.strInstructions?.split('.').length-1) ? `${p}.` : p }}
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="mb-2 text-2xl font-semibold">Ingredients</h2>
        <ul>
          <template v-for="(item, i) of new Array(20)" :key="i">
            <li v-if="meal[`strIngredient${i+1}`] && meal[`stringredient${i + 1}`] !== ' '" class="lowercase">
              {{i+1}}. {{ meal[`strIngredient${i+1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="mb-2 text-2xl font-semibold">Measures</h2>
        <ul>
            <template v-for="(item, i) of new Array(20)" :key="i">
              <li v-if="meal[`strMeasure${i + 1}`] && meal[`strMeasure${i + 1}`] !== ' '" class="lowercase">
                {{ i + 1 }}. {{ meal[`strMeasure${i + 1}`] }}
              </li>
            </template>
          </ul>
      </div>
    </div>
    <div class="mt-2">
      <YoutubeButton :href="meal.strYoutube">
        Watch Video
      </YoutubeButton>
      <a
        :href="meal.strSource"
        target="_blank"
        class="inline-block px-4 py-2 ml-1.5 text-white transition-colors duration-300 bg-purple-400 rounded hover:bg-purple-500"
      >
        View Original Source
      </a>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals[0] || {};
    })
});

</script>