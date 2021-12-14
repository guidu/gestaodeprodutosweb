<template>
  <div 
    class="column justify-evenly" 
    style="height: 70px"
  >
    <q-select
      ref="categoria"
      v-model="model"
      use-input
      filled
      hide-selected
      fill-input
      :options="categorias"
      label="Categoria"
    />
  </div>
</template>
<script>
import apiProduto from "/src/services/apiProduto";

export default {


  data(){
    return {
      categorias: [],
      lista: []
    }
  },
  async beforeMount() {
    await this.getListaDeCategoria() ;
  },
  methods: {
    getListaDeCategoria() {
       apiProduto
        .findCategorias()
        .then((response) => { 
        console.log(response) 
         for (let i = 0; i < response.data.length; i++) {
           this.categorias.push({label: response.data[i].descricao , value:  response.data[i].idCategoria});
         }
        })
        .catch((error) => {})
    }
  }
  
}
</script>
