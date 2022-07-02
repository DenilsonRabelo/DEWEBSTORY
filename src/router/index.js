import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Cadastro from "../views/Cadastro.vue";
import Home from "../views/Home.vue";
import Painel from "../views/Painel.vue";
import Criar from '../views/Criar.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/cadastro",
      name: "Cadastro",
      component: Cadastro,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/painel",
      name: "Painel",
      component: Painel,
    },
    {
      path: "/criar",
      name: "Criar",
      component: Criar,
    }
  ],
});

export default router;
