import Vue from 'vue'
import Router from 'vue-router'
import topics from '../topics.vue'
import topicPage from '../topicPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'topics',
      path: '/topics',
      component: topics
    },
    {
      name: 'topicPage',
      path:'/topicPage/:id',
      component: topicPage
    }
  ]
})
