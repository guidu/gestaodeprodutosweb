<template>
  <div class="q-pa-md">
    <q-form>
      <q-layout
        view="lHh lpr lFf"
        container
        style="height: 650px; width: 800px"
        class="shadow-2 rounded-borders"
      >
        <q-header elevated>
          <q-toolbar class="glossy">
            <!--q-btn class="q-mr-sm" round dense icon="menu" flat/-->
            <q-toolbar-title>Cadastro de Produto</q-toolbar-title>
          </q-toolbar>
        </q-header>

        <q-footer elevated>
          <q-toolbar class="glossy">
            <q-toolbar-title>Footer</q-toolbar-title>
          </q-toolbar>
        </q-footer>

        <q-page-container>
          <q-page class="q-pa-md">
            <div
              class="column justify-evenly"
              style="height: 70px"
            >
              <q-input 
                v-model="model.descricao"
                dense="dense" 
                outlined
                label="Descrição"
              />
            </div>
            <div 
              class="column justify-evenly" 
              style="height: 70px"
            >
              <q-input 
                v-model="model.marcaModelo"
                dense="dense"
                outlined 
                label="Marca/Modelo"
              />
            </div>
            <div 
              class="column justify-evenly" 
              style="height: 70px"
            >
              <categoria />
            </div>
            <div 
              class="column justify-evenly" 
              style="height: 70px"
            >
              <cor />
            </div>

            <div 
              class="column justify-evenly" 
              style="height: 70px"
            >
              <q-input
                v-model="price"
                filled
                label="Preço de compra"
                mask="#,##"
                fill-mask="0"
                reverse-fill-mask
                input-class="text-right"
              />
            </div>
            <div 
              class="column justify-evenly" 
              style="height: 70px"
            >
              <q-input
                v-model="price"
                filled
                label="Preço de Venda"
                mask="#,##"
                fill-mask="0"
                reverse-fill-mask
                input-class="text-right"
              />
            </div>
            <div 
              class="column justify-evenly" 
              style="height: 70px"
            >
              <q-btn
                color="white"
                text-color="black"
                label="Salvar"
                @click="salvar"
              />
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-form>
  </div>
</template>

<script>
import apiProduto from "/src/services/apiProduto";
import axios from "axios";
import { ref } from "vue";
import Categoria from "/src/components/Categoria";

import Cor from "/src/components/Cor";
//mport cors from 'cors';
//import express from 'express';
export default {
  name: "PageProduto",
  components: {
    'categoria': Categoria,
    
    'cor': Cor
  },
  data() {
    return {
      model:{}
    };
  },
  methods: {
    salvar() {
      apiProduto
        .salvar()
        .then((response) => {
          this.triggerPositive();
        })
        .catch((error) => {
          this.triggerNegative();
        });
    },

    triggerNegative() {
      this.$q.notify({
        type: "negative",
        position: "top",
        message:
          "Ocorreu um erro, necessário procurar o adminitrador do sistema.",
      });
    },
  },
};
</script>