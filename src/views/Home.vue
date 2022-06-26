<script>

import navBar from "../components/navBar.vue"
import slide from "../components/slide.vue"
import listaProduto from "../components/listaproduto.vue"
import produto from "../components/produto.vue"
import axios from 'axios'


export default {
    name: "Home",
    components: {
        navBar,
        listaProduto,
        slide,
        produto,
    },
};

</script>

<template>
    <div class="geral">
        <navBar />
        <slide />
        <listaProduto>
            <produto />
        </listaProduto>
    </div>
</template>


<style scoped>
* {
    background-color: black;
    padding: 0;
    box-sizing: border-box;
}
</style>
