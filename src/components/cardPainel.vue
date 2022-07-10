<template>

  <div class="card" v-for="produtos in produtos" :key="produtos.id">
    <div class="d-flex justify-content-center">
      <img class="card-img-top" :src="produtos.attributes.image" />
    </div>
    <div class="card-body p-4">
      <div class="text-center">
        <h5 class="fw-bolder">Nome: {{ produtos.attributes.name }}</h5>
        <p>Descrição: {{ produtos.attributes.description }}</p>
        <span>Preço: {{ produtos.attributes.price }}</span><br>
        <span v-if="produtos.attributes.qtd <= 0" class="red">Quantidade: {{ produtos.attributes.qtd }}</span>
        <span v-else >Quantidade: {{ produtos.attributes.qtd }}</span>
      </div>
    </div>
    <div class="card-footer bg-transparent">
      <div class="text-center btn">
        <a class="btn btn-outline-dark delete" @click="deletarItem(produtos.id)" href="#">Deletar</a>
        <router-link :to="`/editar/${produtos.id}`" class="btn editar">Editar</router-link>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
export default {

  data() {
    return {
      produtos: [],
      error: null,
      estado : null
    };
    
  },
  async mounted() {
    this.getItens();
  },

  methods: {
    image(produtos) {
      link = produtos.attributes.image;
      return `${link}`;
    },

    async deletarItem(id) {
      let token = localStorage.getItem("usuario");
      token = JSON.parse(token);
      try {
        await axios.delete(`http://localhost:1337/api/produtos/${id}`, {
          headers: { Authorization: `Bearer ${token.jwt}` },
        });
        alert(`produto deletado com sucesso id: ${id}`)
        this.getItens();
      } catch (error) {
        alert("algo de errado aconteceu");
      }
    },

    async getItens() {
      const token = localStorage.getItem("usuario");
      const response = await axios.get("http://localhost:1337/api/produtos");
      this.produtos = response.data.data;
    },
    editar() {
      this.$router.push("editar");
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 500px;
  height: 400px;
  text-align: center;
  border-radius: 20px;
  list-style: none;
  color: #222;
  padding: 40px;
}
.card:hover {
  transform: scale(1.1);
}

.red {
  color: red;
}

.delete {
  background-color: red;
  margin-left: 10px;
  color: white;
  transition: 2s;
}
.editar {
  color: white;
  background-color: green;
  transition: 2s;
}

.editar:hover {
  transform: scale(1.1);
}

.delete:hover {
  transform: scale(1.1);
}

img {
  height: 100px;
  width: 100px;
}
</style>
