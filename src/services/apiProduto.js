import axios from 'axios';

export default {
  find(){
      return new Promise((resolve, reject) => {
        const URL = 'http://localhost:8085/api/produto/listar'
        axios.get(URL).then(response => resolve(response.data)).catch(error => reject(error))
      })
  },
  salvar() {
    return new Promise((resolve, reject) => {
      const URL = "http://localhost:8085/api/produto/inserir"
      axios.post(URL).then(response => resolve(response.data)).catch(error => reject(error))

    })
  },
  findCategorias() {
    return new Promise((resolve, reject) => {
      const URL = 'http://localhost:8085/api/categoria/listaDeCategoria'
      axios.get(URL).then(response => resolve(response)).catch(error => reject(error))
    })
  },
  findCores(){
    return new Promise((resolve, reject) => {
      const URL = 'http://localhost:8085/api/cor/lista'
      axios.get(URL).then(response => resolve(response)).catch(error => reject(error))
    })
  },
  login(){
    return new Promise((resolve, reject) => {
      const URL = 'http://localhost:8085/api/login'
      axios.post(URL).then(response => resolve(response.data)).catch(error => reject(error))
    })
  },
}


