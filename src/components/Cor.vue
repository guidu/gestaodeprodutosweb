<template>
  <div 
    class="column justify-evenly" 
    style="height: 70px"
  >
    <q-select
      ref="cor"
      v-model="model"
      use-input
      filled
      hide-selected
      fill-input
      :options="cores"
      label="Cor"
    />
  </div>
</template>
<script>
import apiProduto from "/src/services/apiProduto";

export default {

  data(){
    return {
      cores: [],
      lista: []
    }
  },
  async beforeMount() {
    await this.getListaDeCores() ;
  },
  methods: {
    getListaDeCores() {
       apiProduto
        .findCores()
        .then((response) => { 
        console.log(response) 
        
         for (let i = 0; i < response.data.length; i++) {
           this.cores.push({label: response.data[i].descricao , value:  response.data[i].idCor});
         }
        })
        .catch((error) => {})
    }
  }
  
}
</script>
