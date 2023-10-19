<template>
  <div class="py-6 px-7">
    <router-link
      :to="{name: 'byIngredient'}"
      class="block text-lg font-semibold mb-7 text-gray-800 pl-6 relative
        before:rounded before:content-[''] before:w-3 before:h-[2px] before:bg-gray-800 before:absolute before:left-0 before:top-[10.2px] before:-rotate-45
        after:rounded after:content-[''] after:w-3 after:h-[2px] after:bg-gray-800 after:absolute after:left-0 after:bottom-[8.2px] after:rotate-45
      "
    >
      Back
    </router-link>
    <Meals :meals="meals" />
    </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

import store from "../store";
import Meals from '../components/Meals.vue';


const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient);
})

</script>