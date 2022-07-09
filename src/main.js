import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";


router.beforeEach((to,from,next) => {
    console.log(localStorage.getItem("role"))
    if(localStorage.getItem("role") == '"admin"'){
        next()
    }else if ((to.name == 'Painel' || to.name == 'Criar' || to.path == '/editar' || to.name === 'Editar') && localStorage.getItem("role") == '"public"' || localStorage.getItem("role") == '"authenticated"'){
        next('/home')
    }else if (!localStorage.getItem("role") && (to.name == 'Painel' || to.name == 'Criar' || to.path == '/editar' || to.name === 'Editar')){
        next('/home')
    }else {
        next()
    }

})

const app = createApp(App);

app.use(createPinia());

app.use(router);
app.mount("#app");
