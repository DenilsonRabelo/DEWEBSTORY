<template>
    <div class="conteiner-login"> 
        <div class="tela-form">
            <h1>Login</h1>
            <LoginFormVue/>
        </div>
        <div class="tela-img">
            <img src="../assets/undraw_Fingerprint_re_uf3f.png" alt="" srcset="">
        </div>
    </div>
</template>

<script>
import LoginFormVue from "../components/LoginForm.vue";

export default {
    name : 'Login',
    components : {
        LoginFormVue
    } 
}

</script>


<style scoped>
    *,
    *::after,
    *::before{
        padding:  0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        
    }
    .conteiner-login {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .tela-form {
        width: 500px;
        height: 450px;
        background-color: #f2f2f2;
        border-radius: 20px;
    }

    .tela-img{
        width: 500px;
        height: 550px;
        background-color: bisque;
    }

    h1 {
        text-align: center;
    }
    img {
        width: 100%;
        height: 100%;
    }
</style>