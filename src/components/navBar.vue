<template>
  <div class="navbar">
    <nav>
      <h2 class="logo"><a href="#" @click="home"><span class="texto-logo">DEWEBSTORY</span></a></h2>
      <ul>
        <li><a  href="#" @click="home">Home</a></li>
        <li><a href="#" @click="sobre">Sobre</a></li>
        <li><a href="#" @click="servicos">Serviços</a></li>
      </ul>
      <div class="btn-group">
      <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {{nome}}
      </button>
      <ul class="dropdown-menu">
        <li v-if="adm"><a class="logout" @click="logout()">Logout</a></li>
        <li><a class="painel" v-if="adm == 'admin'" @click="$router.push('/painel')">Painel</a></li>
      </ul>
    </div>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
      data(){
        return {
          nome:"",
          adm : null,
        }
      },

    mounted(){
      if(localStorage.getItem('nome')){
        let nome1 = localStorage.getItem('nome')
        let role = localStorage.getItem('role')
        role = JSON.parse(role)
        nome1 = JSON.parse(nome1)
        this.nome = nome1.username
        this.adm = role
      }
    },
     methods: {
      logout() {
          localStorage.removeItem('usuario')
          localStorage.removeItem('nome')
          localStorage.removeItem('role')
          this.$router.push('/login')
      },
      home(){
        this.$router.push("/home")
      },
      sobre(){
        this.$router.push("/sobre")
      },
      servicos(){
        this.$router.push("/servicos")
      }
    }
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
    *,
    *::after,
    *::before{
        padding:  0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
  
        
    }

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100vw;
    padding-left: 8%;
    padding-right: 8%;
}

.navbar {
  width:100vw;
  
}

.logo {
    color: white;
    font-size: 35px;
    letter-spacing: 1px;
    cursor: pointer;
}

.texto-logo {
    color: crimson;
}

nav ul li {
    list-style-type: none;
    display: inline-block;
    padding: 10px 15px;
}


nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    text-transform: capitalize;
}

nav ul li a:hover {
    color: crimson;
    transition: .3s;
}
.logout, .painel {
  color : black;
}



</style>
