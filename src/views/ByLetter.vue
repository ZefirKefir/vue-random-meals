<template>
  <div class="h-full px-7">
    <div class="flex justify-center my-6 text-lg font-semibold text-gray-600
      [&>*]:px-3 [&>*]:py-1 [&>*]:border-purple-300/30
    ">
      <router-link
        v-for="letter in letters.split('')"
        :to="{ name: 'byLetter', params: { letter } }"
        :key="letter"
        :class="letter === 'A' && letter !== route.params.letter ? 'bg-white rounded-l border-l-[1.35px] border-r border-y-[1.35px] hover:bg-purple-200 hover:text-purple-700' :
          letter === 'Z' && letter !== route.params.letter ? 'bg-white rounded-r border-l-[1.35px] border-r border-y-[1.35px] hover:bg-purple-200 hover:text-purple-700' :
            letter === route.params.letter ? 'bg-purple-800/60 text-white rounded-sm scale-y-110' :
            'bg-white border-x border-y-[1.35px] hover:bg-purple-200 hover:text-purple-700'
          "
      >
        {{ letter }}
      </router-link>
    </div>
    
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";

import store from '../store';
import Meals from '../components/Meals.vue';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter);
});

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter);
})

</script>