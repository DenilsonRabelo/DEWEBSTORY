<template>
    <div class="card" v-for="produtos in produtos" :key="produtos.id">
            <div class="d-flex justify-content-center">
                <img class="card-img-top" :src="produtos.attributes.image"/>
            </div>
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">{{ produtos.attributes.name }}</h5>
                    <p>{{produtos.attributes.description}}</p>
                    <span>{{produtos.attributes.price}}</span>
                </div>
            </div>
            <div class="card-footer bg-transparent">
                <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
     produtos: [],
      error: null
    }
  },
  async mounted () {
    try {
      const response = await axios.get('http://localhost:1337/api/produtos')
      this.produtos = response.data.data
    } catch (error) {
      this.error = error;
    }
  },

  methods:{
    image(produtos){
        link = produtos.attributes.image
        return `${link}`
    }
  }
}
</script>


<style scoped>
    .card{
        height: 400px;
        text-align: center;
        border-radius: 20px;
        list-style: none;
        color: #222;
        padding: 40px;
    }
    .card:hover{
    transform: scale(1.1);
    }

    img{
        height: 100px;
        width: 100px;
    }

</style>