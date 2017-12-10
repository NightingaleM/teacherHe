import Vue from 'vue'
import Router from 'vue-router'
import storys from '../storys.vue'
import storyPage from '../storyPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'storys',
      path: '/storys',
      component: storys
    },
    {
      name: 'storyPage',
      path:'/storyPage/:id',
      component: storyPage
    }
  ]
})
