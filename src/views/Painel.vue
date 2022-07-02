<template>
<navPainel/>
<listaProduto>
<cardPainel></cardPainel>
</listaProduto>

</template>
<script>

import navPainel from "../components/navPainel.vue"
import cardPainel from '../components/cardPainel.vue'
import listaProduto from "../components/listaProduto.vue"

export default {
    name: "Painel",
    components: {
        cardPainel,
        listaProduto,
        navPainel
    },
};
</script>

<style scoped>
    
</style>