<template>
    <div class="formulario">
        
        <form >
            <div v-if="form.estado == false" class="alert alert-warning" role="alert">
            Algo de errado aconteceu ao criar
            </div>
            <div v-if="form.estado == true" class="alert alert-success" role="alert">
            produto criado com sucesso
            </div>
            <label for="nome">Nome</label>
            <input type="text" id="nome" autocomplete="off"  v-model="form.name" >
            <label for="preco">Preço</label>
            <input type="number" id="preco" v-model="form.price" >
            <label for="descricao">Descrição</label>
            <input type="text" id="descricao" v-model="form.description" >
            <label for="imagem">Link Imagem</label>
            <input type="text" id="imagem" v-model="form.image">
            <label for="qtd">Quantidade</label>
            <input type="number" id="qtd" v-model="form.qtd">
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
            description: "",
            image: "",
            price: "",
            qtd: "",
            estado : null
            }
        }
    },
    methods:{
        async Criar(e){
            e.preventDefault()
            let token = localStorage.getItem("usuario")
            token = JSON.parse(token)
            try {
            await axios.post('http://localhost:1337/api/produtos',{
                "data": {
                "name": this.form.name,
                "description": this.form.description,
                "price": this.form.price,
                "image": this.form.image,
                "qtd": this.form.qtd
            }},{
                headers: {Authorization: `Bearer ${token.jwt}`},
            })
            this.form.estado = true
            await new Promise(resolve => setTimeout(resolve, 5000));
            this.$router.push('painel')
            console.log("foi")
            } catch (error) {
                this.form.estado = false
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