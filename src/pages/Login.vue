<template>
  <q-page padding>
    <q-form
      ref="formularioLogin"
      :model="formularioLogin"
      class="q-gutter-md"
      @keyup.enter="logar()"
    >
      <q-input 
        filled 
        lazy-rules 
        type="email" 
        label="Email"
      />
      <q-input 
        filled 
        lazy-rules 
        type="password" 
        label="Senha"
      />
      <div class="row justify-cente content-center">
        <q-btn 
          label="Logar"
          color="primary" 
          @click="logar()"
        >
          <q-tooltip 
            transition-show="rotate" 
            transition-hide="rotate"
          >
            Logar
          </q-tooltip>
        </q-btn>
        <q-btn
          label="Limpar"
          color="primary"
          flat
          class="q-ml-sm"
          @click="limpar()"
        >
          <q-tooltip
            transition-show="rotate" 
            transition-hide="rotate"
          >
            Limpar Formulário
          </q-tooltip>
        </q-btn>
      </div>
      <div class="form-group" />
    </q-form>
  </q-page>
</template>

<script>
import apiProduto from "/src/services/apiProduto";
export default {
  data() {
    return {
      formularioLogin: {},
    };
  },
  methods: {
    logar() {
      apiProduto
        .login()
        .then((response) => {
        })
        .catch((error) => {
          this.triggerNegative();
        });    
    },
    limpar() {
      this.formularioLogin = {};
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
  create() {
    alert("Alert");
    console.log("Iniciou!!!");
  },
};
</script>

<style lang="scss">
.q-icon {
  position: absolute;
}
</style>>

