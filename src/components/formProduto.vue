<template>
    <div>
        <form>
            <label for="nome">Nome</label>
            <input type="text" id="nome" autocomplete="off"  v-model="form.name" >
            <label for="preco">Preço</label>
            <input type="number" id="preco" v-model="form.price" >
            <label for="descricao">Descrição</label>
            <input type="text" id="descricao" v-model="form.description" >
            <label for="imagem">Link Imagem</label>
            <input type="text" id="imagem" v-model="form.image">
        </form>
            <div class="btn">
                <button class="btn-cadastrar" @click="Editar($event)">Cadastrar</button>
                <button class="btn-cadastrar" @click="this.$router.push('painel')">Voltar</button>
            </div>
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
        async Editar(e){
            e.preventDefault()
            let token = localStorage.getItem("usuario")
            token = JSON.parse(token)
            try {
            await axios.delete(`http://localhost:1337/api/produtos/${id}`,{
                headers: {Authorization: `Bearer ${token.jwt}`}
            })
            this.getItens()
            } catch (error) {
                console.log("erro")
            }
        }
    }

}
</script>