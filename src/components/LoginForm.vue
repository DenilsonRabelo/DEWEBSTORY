<template>
  <div class="a">
    <div v-if="form.estado == false" class="alert alert-warning" role="alert">
      Algo de errado aconteceu com o login
    </div>
    <div v-if="form.estado == true" class="alert alert-success" role="alert">
      login realizado
    </div>
    <form>
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Digite seu email"
        autocomplete="off"
        v-model="form.email"
      />
      <label for="senha">Senha</label>
      <input
        type="password"
        id="senha"
        placeholder="Digite sua senha"
        v-model="form.senha"
      />
    </form>
    <div class="btn">
      <button class="btn-entrar" @click="login" type="submit">Entrar</button>
      <button
        @click="$router.push('cadastro')"
        class="btn-cadastrar"
        type="submit"
      >
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
        email: "",
        senha: "",
        estado : null,
      },
    };
  },

  methods: {
    async login() {
      try{
      const { data } = await axios.post(
        "http://localhost:1337/api/auth/local",
        {
          identifier: `${this.form.email}`,
          password: `${this.form.senha}`,
        }
      );

      if (data) {
        try { 
            const item = await axios.get("http://localhost:1337/api/users/me", {
                headers: {Authorization: `Bearer ${data.jwt}`},
                params: {
                populate: "role",
                },
            });
            localStorage.setItem("role", JSON.stringify(item.data.role.type))
            localStorage.setItem("nome", JSON.stringify(data.user));
            localStorage.setItem("usuario", JSON.stringify(data));
            this.form.estado = true
            await new Promise(resolve => setTimeout(resolve, 1000));
            this.$router.push("home");
        } catch (error) {
          this.form.estado = false
        }
      }
    }catch(error){
      this.form.estado = false
    }
    }
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 70%;
  padding-left: 20px;
  margin-top: 50px;
  
}


label {
  text-align: start;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  padding: 10px 0;
  padding-left: 10px;
  margin-bottom: 20px;
  border-radius: 15px;
  border: none;
}
input:focus {
  border-color: rgb(255, 0, 51);
  outline: none;
  box-shadow: 0px 0px 0px 1px crimson;
}
.btn {
  width: 100%;
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.btn-entrar {
  padding: 10px;
  width: 150px;
  border-radius: 20px;
  border: 1px solid crimson;
  transition: 1s;
}
.btn-entrar:hover {
  border: none;
  background-color: crimson;
  color: aliceblue;
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
