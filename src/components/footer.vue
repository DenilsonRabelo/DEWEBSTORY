<template>
    <div class="conteudo">
        <div class="barra1">
            <p>Todos os direitos reservados</p>
            <a href="#">Sobre</a>
            <a href="#">Vinculos</a>
            <ul>
                <li><a href=""><i class="bi bi-facebook"></i></a></li>
                <li><a href=""><i class="bi bi-instagram"></i></a></li>
                <li><a href=""><i class="bi bi-linkedin"></i></a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .conteudo {
        background-color: black;
        width: 100vw;
        height: 140px;
    }
    .barra1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .barra1 a {
        text-decoration: none;
        color: white;
        transition: 2s;
    }

    .barra1 a:hover {
        text-decoration: none;
        color: skyblue;
    }

    .barra1 p {
        color: white;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:center;
        margin-right: 50px;
        padding-top: 10px;
    }

    ul li{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 20px;
    }

    ul li a {
        display: flex;
        align-items: center;
        justify-content: start;
        transition: 2s;
    }
    ul li a i{
        display: flex;
        justify-content: space-around;
    }

    ul li a:hover {
        color: skyblue;
    }

</style>