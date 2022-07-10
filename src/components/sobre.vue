<template>
<div>
    <NavBar class="bl"/>
    <div class="texto">
        <p>o mercialização de produtos e serviços pela internet, onde as transações são realizadas via dispositivos eletrônicos, como computadores e smartphones. Esse tipo de comércio pode contar com diversos canais de vendas. comercialização de produtos e serviços pela internet, onde as transações são realizadas via dispositivos eletrônicos, como computadores e smartphones.</p>
    </div>
</div>
</template>
<script>
import NavBar from "./navBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
<style>
    .bl {
        background-color: black;
    }
    .texto {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80vh;
    }

    p {
        color: black;
        font-size: 18px;
        text-align: center;

    }
</style>