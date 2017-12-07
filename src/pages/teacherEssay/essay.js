import Vue from 'vue';
import router from './router/essay.js'
import essay from './essay.vue'
import HelloWorld from '@/components/HelloWorld'

import './essay.less'

new Vue({
    el: '#essay',
    render: h => h(essay),
    router,
});
new Vue({
  el: '#NavBar',
  render: h => h(HelloWorld)
});