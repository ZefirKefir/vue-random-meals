import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import Home from '../views/Home.vue';

import ByName from '../views/ByName.vue';
import ByLetter from '../views/ByLetter.vue';
import ByIngredient from '../views/ByIngredient.vue';
import MealsByIngredient from '../views/MealsByIngredient.vue';
import MealDetails from '../views/MealDetails.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: ByName,
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: ByLetter,
      },
      {
        path: '/by-ingredient',
        name: 'byIngredient',
        component: ByIngredient,
      },
      {
        path: '/by-ingredient/:ingredient?',
        name: 'mealsByIngredient',
        component: MealsByIngredient,
      },
      {
        path: '/meal/:id?',
        name: 'mealDetails',
        component: MealDetails,
      },
    ]
  },
  {
    path: '/guest',
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;