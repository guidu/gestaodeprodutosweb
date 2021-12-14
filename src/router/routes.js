
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '/', 
        component: () => import('pages/Login.vue') 
      },
      { 
        path: '/Login', 
        name: "Login",
        component: () => import('pages/Login.vue') 
      },
      { 
        path: '/CadastroProduto', 
        name: "CadastroProduto",
        component: () => import('pages/cadastro/Produto.vue') 
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
