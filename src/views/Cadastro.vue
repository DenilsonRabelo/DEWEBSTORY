<script>
import cadastroVue from "../components/cadastro.vue";

export default {
  name: 'Cadastro',
  components: {
    cadastroVue,
  },
};
</script>

<template>
  <div class="conteiner-cadastro">
    <div class="tela-form">
        <cadastroVue/>
    </div>
  <div class="tela-img">
    <img src="../assets/undraw_Experience_design_re_ca7l.png" alt="" srcset="" />
  </div>
  </div>

</template>

<style scoped>
    *,
    *::after,
    *::before{
        padding:  0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        
    }
    .conteiner-cadastro {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .tela-form {
        width: 500px;
        height: 450px;
        background-color: #f2f2f2;
        border-radius: 20px;
    }
    

    .tela-img{
        width: 550px;
        height: 450px;
       
        
    }

    h1 {
        text-align: center;
    }
    img {
        width: 100%;
        height: 100%;
    }
</style>
