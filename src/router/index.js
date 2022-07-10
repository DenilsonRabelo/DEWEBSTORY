import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Cadastro from "../views/Cadastro.vue";
import Home from "../views/Home.vue";
import Painel from "../views/Painel.vue";
import Criar from '../views/Criar.vue';
import Editar from '../views/Editar.vue'
import PathNotFound from '../components/PathNotFound.vue'
import sobre from '../components/sobre.vue'
import servicos from '../components/servico.vue'
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
    },
    {
      path: "/editar/:id",
      name: "Editar",
      component: Editar,
      props: true
    },
    {path: '/:pathMatch(.*)*', component: PathNotFound},
    {
      path: '/sobre',
      component: sobre
    },
    {
      path: '/servicos',
      component: servicos
    }
  ],

});


export default router;
