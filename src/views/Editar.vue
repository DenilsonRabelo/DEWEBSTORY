<template>
<formEdtProdutoVue/>
<p>{{id}}</p>
</template>
<script>
import formEdtProdutoVue from '../components/formEdtProduto.vue';
export default {
    name: "Editar",
    props: ['id'],
    components: {
        formEdtProdutoVue,
    },
};
</script>

<style scoped>
    body{
        background-color: black;
    }
</style>