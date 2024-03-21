import { createRouter, createWebHistory } from 'vue-router'
import Index from './pages/index.vue'
import Login from './pages/login.vue'
import Pokemon from './pages/pokemon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/pokemon/:name',
      name: 'pokemon',
      component: Pokemon
    }
  ]
})


export default router
