<template>
    <div class="nav">
        <a class="btn btn-outline-dark" @click="criar">Criar</a>
    </div>
</template>

<script>

export default {  
    methods: {
        criar(){
            this.$router.push("criar");
        }
    }
}
</script>

<style scoped>
    .nav {
        background-color: black;
        padding: 20px;
    }

    .nav a {
        padding: 5px 25px 5px 25px;
        background-color: aliceblue;
        color: black;
        transition: 1s;
    }

    .nav a:hover {
        
        transform: scale(1.1);
    }
</style>