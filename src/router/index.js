import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'Login',
      component : Login
    },
    {
      path : '/login',
      name : 'Login',
      component : Login
    },
    {
      path : '/cadastro',
      name : 'Cadastro',
      component : Cadastro
    },
    {
      path : '/home',
      name : 'Home',
      component : Home
    },

  ]
})

export default router
