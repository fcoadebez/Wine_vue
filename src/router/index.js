import Vue from 'vue'
import Router from 'vue-router'
import Inscription from '@/pages/Inscription'
import Connexion from '@/pages/Connexion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signup',
      name: 'Inscription',
      component: Inscription
    },
    {
      path: '/login',
      name: 'Connexion',
      component: Connexion,
      props: true
    }
  ]
})
