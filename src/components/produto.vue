<template>
    <div class="card" v-for="produtos in produtos" :key="produtos.id">
            <div class="d-flex justify-content-center">
                <img class="card-img-top" :src="produtos.attributes.image"/>
            </div>
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">Nome: {{ produtos.attributes.name }}</h5>
                    <p>Descrição: {{produtos.attributes.description}}</p>
                    <span>Preço: R$ {{produtos.attributes.price}}</span>
                </div>
            </div>
            <div class="card-footer bg-transparent">
                <div class="text-center">
                    <button class="btn btn-outline-dark mt-auto" :disabled='produtos.attributes.qtd <= 0' href="#" @click="comprar(produtos.id, produtos.attributes.image, produtos.attributes.name, produtos.attributes.description,
                     produtos.attributes.price, produtos.attributes.qtd, produtos.attributes.venda)">Comprar</button>
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
     produtos: [],
      error: null,
      
    }
  },
  async mounted () {
      const toke = localStorage.getItem("usuario")
      const response = await axios.get('http://localhost:1337/api/produtos')
      this.produtos = response.data.data
    },

  methods:{
    image(produtos){
        link = produtos.attributes.image
        return `${link}`
    },
    async comprar(id, image, nome, descricao, preco, qtd, vendas){
        let token = localStorage.getItem("usuario");
        token = JSON.parse(token);
        try {
            await axios.put(`http://localhost:1337/api/produtos/${id}`,{
                "data": {
                "name": nome,
                "description": descricao,
                "price": preco,
                "image": image,
                "qtd": qtd-1,
                "venda": vendas+1
            }},{
            headers: { Authorization: `Bearer ${token.jwt}` },
          })
        } catch (error) {
            console.log("erro")
        }
    },
    
  }
}
</script>


<style scoped>
    .card{
        max-width:500px;
        height: 400px;
        text-align: center;
        border-radius: 20px;
        list-style: none;
        color: #222;
        padding: 40px;
    }
    .card:hover{
    transform: scale(1.1);
    }

    img{
        height: 100px;
        width: 100px;
    }

</style>