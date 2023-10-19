<template>
  <div class="px-7">
    <input type="text"
      v-model="keyword"
      class="w-full my-6 bg-white border-2 border-gray-200 rounded"
      placeholder="Search for Meals"
      @change="searchMeals" />
      <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from "vue"
import { useRoute } from 'vue-router';
import store from "../store";
import Meals from '../components/Meals.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

const searchMeals = () => {
  if (keyword.value) {
    store.dispatch('searchMeals', keyword.value);
  } else {
    store.commit('setSearchedMeals', []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) searchMeals();
})
</script>