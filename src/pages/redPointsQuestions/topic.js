import Vue from 'vue';
import router from './router/topic.js'
import topic from './topic.vue'
import HelloWorld from '@/components/HelloWorld'

import './topic.less'

new Vue({
    el: '#topic',
    render: h => h(topic),
    router,
});
new Vue({
  el: '#NavBar',
  render: h => h(HelloWorld)
});