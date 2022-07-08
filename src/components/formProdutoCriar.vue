<template>
    <div class="formulario">
        <form >
            <label for="nome">Nome</label>
            <input type="text" id="nome" autocomplete="off"  v-model="form.name" >
            <label for="preco">Preço</label>
            <input type="number" id="preco" v-model="form.price" >
            <label for="descricao">Descrição</label>
            <input type="text" id="descricao" v-model="form.description" >
            <label for="imagem">Link Imagem</label>
            <input type="text" id="imagem" v-model="form.image">
            <div class="btn">
                <button class="btn-cadastrar cadastrar" @click="Criar($event)">Criar</button>
                <button class="btn-cadastrar voltar" @click="this.$router.push('painel')">Voltar</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {  
    data() { 
        return {
            form:{
            name: "",
            price: "",
            description: "",
            image: "",
            }
        }
    },
    methods:{
        async Criar(e){
            e.preventDefault()
            let token = localStorage.getItem("usuario")
            token = JSON.parse(token)
            try {
            await axios.post('http://localhost:1337/api/produtos',this.form,{
                headers: {Authorization: `Bearer ${token.jwt}`}
            })
            console.log("foi")
            } catch (error) {
                console.log("erro")
            }
        }
    }

}
</script>

<style scoped>
    .formulario {
        height: 100vh;
        background-color: #a2d2ff;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    label {
        margin-top: 20px;
        font-weight: bold;

    }

    input {
        border-radius: 15px;
        padding: 5px;
        border: 1px solid black;
    }

    .btn {
        display: flex;
        justify-content: space-around;
    }

    .btn-cadastrar {
        margin: 20px;
        border: none;
        padding: 10px 20px 10px 20px;
        border-radius: 20px;
        transition: 1s;
    }

    .btn-cadastrar:hover {
        transform: scale(1.1);
        color: white;
    }

    .cadastrar {
        background-color: green;

    }

    .voltar {
        background-color: bisque;
    }

</style>