import Vue from 'vue';
import essay from './essay.vue'
import HelloWorld from '@/components/HelloWorld'

// var editor = require('./editor.vue');

new Vue({
    el: '#essay',
    render: h => h(essay)
});
new Vue({
  el: '#NavBar',
  render: h => h(HelloWorld)
});
// import Vue from 'vue';
// var editor = require('./editor.vue');
// new Vue({
//     el: '#main',
//     render: h => h(editor)
// });