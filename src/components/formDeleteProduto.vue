<template>
    <div>
        <form>
            <label for="id">Nome</label>
            <input type="text" id="id" autocomplete="off"  v-model="form.id">
        </form>
            <div class="btn">
                <button class="btn-cadastrar" @click="deletar($event)">Deletar</button>
                 <button class="btn-cadastrar" @click="this.$router.push('painel')">Voltar</button>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {   
    data() { 
        return {
            form:{
            id: "",
            }
        }
    },
    methods:{
        async deletar(e){
            e.preventDefault()
            const token = localStorage.getItem('usuario')
            const {data} = await axios.delete(`http://localhost:1337/api/produtos/${this.form.id}`, {
                
            });

            console.log(data);
        }
    }

}
</script>

