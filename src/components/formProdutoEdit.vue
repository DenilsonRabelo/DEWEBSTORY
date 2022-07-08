<template>
  <div class="formulario">
    <form>
      <label for="nome">Nome</label>
      <input type="text" id="nome" autocomplete="off" v-model="form.name" />
      <label for="preco">Preço</label>
      <input type="number" id="preco" v-model="form.price" />
      <label for="descricao">Descrição</label>
      <input type="text" id="descricao" v-model="form.description" />
      <label for="imagem">Link Imagem</label>
      <input type="text" id="imagem" v-model="form.image" />
    </form>
    <div class="btn">
      <button class="btn-cadastrar" @click="Editar($event)">Editar</button>
      <button class="btn-cadastrar" @click="this.$router.push('painel')">
        Voltar
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        price: "",
        description: "",
        image: "",
      },
    };
  },
  props: ["id"],
  async mounted() {
    let token = localStorage.getItem("usuario");
    token = JSON.parse(token);

    try {
      const { data } = await axios.get(
        `http://localhost:1337/api/produtos/${this.id}`,
        {
          headers: { Authorization: `Bearer ${token.jwt}` },
        }
      );
      this.form.name = data.data.attributes.name;
      this.form.price = data.data.attributes.price;
      this.form.description = data.data.attributes.description;
      this.form.image = data.data.attributes.image;
    } catch (error) {
      console.log("erro");
    }
  },
  methods: {
    async Editar(e) {
      e.preventDefault();
      let token = localStorage.getItem("usuario");
      token = JSON.parse(token);
      try {
        await axios.put(
          `http://localhost:1337/api/produtos/${this.id}`,{
            data: {
                name: this.form.name,
                price: this.form.price,
                description: this.form.description,
                image: this.form.image
            }},{
            headers: { Authorization: `Bearer ${token.jwt}` },
          }
        );
      } catch (error) {
        console.log("erro");
      }
    },
  },
};
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
