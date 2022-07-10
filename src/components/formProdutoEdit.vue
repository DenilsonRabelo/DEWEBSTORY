<template>
  <div class="formulario">
    <div v-if="form.estado == false" class="alert alert-warning" role="alert">
      Algo de errado aconteceu com o editar
    </div>
    <div v-if="form.estado == true" class="alert alert-success" role="alert">
      produto editado com sucesso
    </div>
    <form>
      <label for="nome">Nome</label>
      <input type="text" id="nome" autocomplete="off" v-model="form.name" required/>
      <label for="preco">Preço</label>
      <input type="number" id="preco" v-model="form.price" required/>
      <label for="descricao">Descrição</label>
      <input type="text" id="descricao" v-model="form.description" required/>
      <label for="imagem">Link Imagem</label>
      <input type="text" id="imagem" v-model="form.image" required/>
      <label for="qtd">Quantidade</label>
      <input type="number" id="qtd" v-model="form.qtd" required/>
    </form>
    <div class="btn">
      <button class="btn-cadastrar" @click="Editar($event)" >Editar</button>
      <button class="btn-cadastrar" @click="this.$router.push('/painel')">
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
        qtd: "",
        estado: null
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
      this.form.qtd = data.data.attributes.qtd;
    } catch (error) {
      alert("imposivel editar o produto")
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
                image: this.form.image,
                qtd : this.form.qtd
            }},{
            headers: { Authorization: `Bearer ${token.jwt}` },
          }
        );
        this.form.estado = true
        await new Promise(resolve => setTimeout(resolve, 5000));
        this.form.estado = null
        this.$router.push("/painel")
      } catch (error) {
        this.form.estado = false
      }
    },

  }
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
