<script>

import navBar from "../components/navBar.vue";
import slide from "../components/slide.vue"

export default {
  name: "Home",
  components: {
    navBar,
    slide,
},
};

</script>

<template>
    <div class="geral">
        <navBar/>
        <slide/>
    </div>
</template>


<style>
    * {
        background-color: black;
        padding: 0;
        box-sizing: border-box;
    }
</style>
