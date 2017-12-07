import Vue from 'vue'
import Router from 'vue-router'
import essays from '../essays.vue'
import essayPage from '../essayPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'essays',
      path: '/essays',
      component: essays
    },
    {
      name: 'essayPage',
      path:'/essayPage/:id',
      component: essayPage
    }
  ]
})
