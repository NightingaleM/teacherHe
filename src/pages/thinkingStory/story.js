import Vue from 'vue';
import router from './router/story.js'
import story from './story.vue'
import HelloWorld from '@/components/HelloWorld'

import './story.less'

new Vue({
    el: '#story',
    render: h => h(story),
    router,
});
new Vue({
  el: '#NavBar',
  render: h => h(HelloWorld)
});
