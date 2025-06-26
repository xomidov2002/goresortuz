import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PlaceInfo from '@/views/placeInfo.vue'
import Login from '@/views/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/places/:id',
      name: 'place',
      component: PlaceInfo
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
})

export default router