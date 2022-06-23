<template>
  <div>
    <nav>
      <h2 class="logo"><span class="texto-logo">DEWEBSTORY</span></h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#ancor_sobre">Sobre</a></li>
        <li><a href="#ancor_servicos">Serviços</a></li>
        <li><a href="#ancor_contato">Contato</a></li>
      </ul>
    </nav>
  </div>
</template>

<script></script>

<style>
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
    
    padding-left: 8%;
    padding-right: 8%;
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
    text-transform: capitalize;
}

nav ul li a:hover {
    color: crimson;
    transition: .3s;
}



</style>
