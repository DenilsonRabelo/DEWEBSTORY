import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Cadastro from "../views/Cadastro.vue";
import Home from "../views/Home.vue";
import Painel from "../views/admin/Painel.vue";
import FormProduto from "../components/formProduto.vue";
import FormDeleteProduto from "../components/formDeleteProduto.vue";
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
      path: "/formProduto",
      name: "FormProduto",
      component: FormProduto,
    },
    {
      path: "/formDeleteProduto",
      name: "FormDeleteProduto",
      component: FormDeleteProduto,
    },
  ],
});

export default router;
