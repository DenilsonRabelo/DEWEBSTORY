<template>
    <div>
        <form>
            <label for="text">Nome</label>
            <input type="text" id="nome" placeholder="Digite seu nome" autocomplete="off" >
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Digite seu email" autocomplete="off" >
            <label for="senha">Senha</label>
            <input type="password" id="senha" placeholder="Digite sua senha">
        </form>
        <div class="btn">
            <button @click="$router.push('Cadastro')" class="btn-cadastrar" type="submit">Cadastrar</button>
        </div>
    </div>
</template>

<script>
       
</script>


<style>
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 50px;
    }

    label {
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
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
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