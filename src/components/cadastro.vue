<template>
  <div class="a">
    <div v-if="form.estado == false" class="alert alert-warning" role="alert">
      Algo de errado aconteceu com o Cadastro
    </div>
    <div v-if="form.estado == true" class="alert alert-success" role="alert">
      Cadastro realizado
    </div>
    <form class="needs-validation" novalidate>
      <label for="text">Nome</label>
      <input
        type="text"
        id="nome"
        placeholder="Digite seu nome"
        autocomplete="off"
        v-model="form.username" required
      />
      
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Digite seu email"
        autocomplete="off"
        v-model="form.email" required
      />
      
      <label for="senha">Senha</label>
      <input
        type="password"
        id="senha"
        placeholder="Digite sua senha"
        v-model="form.password" required
      />
    </form>
    <div class="btn">
      <button @click="cadastrar" class="btn-cadastrar" type="submit">
        Cadastrar
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
        username: "",
        email: "",
        password: "",
        estado: null,
      },
    };
  },

  methods: {
    async cadastrar() {
      try {
        const verifica = this.varificar()
        if(verifica){
        const response = await axios.post(
          "http://localhost:1337/api/users",
          this.form
        );
        this.form.estado = true
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.$router.push("Login");
        }
      } catch (error) {
        this.form.estado = false
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.form.estado = null
      }
      
    },
    varificar(){
        if (this.form.username == '' ||  !this.form.email.includes("@") || this.form.email == '' || this.form.password.length < 6 ){
            this.form.estado = false
            return false
        }else {
            return true
        }
    }
}
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
}

label {
    padding-top: 10px;
  text-align: start;
  font-size: 16px;
}

input {
  padding: 10px 0;
  padding-left: 10px;
  margin-bottom: 20px;
  border-radius: 15px;
  border: none;
  width: 100%;
}
input:focus {
  border-color: rgb(255, 0, 51);
  outline: none;
  box-shadow: 0px 0px 0px 1px crimson;
}
.btn {
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.btn-cadastrar {
  padding: 10px;
  width: 150px;
  border-radius: 20px;
  border: 1px solid rgb(58, 32, 170);
  transition: 1s;
}

.btn-cadastrar:hover {
  border: none;
  background-color: rgb(58, 32, 170);
  color: aliceblue;
}
</style>
