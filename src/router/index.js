import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import Destination from '@/views/Destination.vue';
import Crew from '@/views/Crew.vue';
import Tech from '@/views/Tech.vue';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/destination',
      name: 'Destination',
      component: Destination
    },
    {
      path: '/crew',
      name: 'Crew',
      component: Crew
    },
    {
      path: '/technology',
      name: 'Technology',
      component: Tech
    }
  ]
})

export default router

  

