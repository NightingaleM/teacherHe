import Vue from 'vue';
import essaypage from './essaypage.vue'
import HelloWorld from '@/components/HelloWorld'

// var editor = require('./editor.vue');
import './essaypage.less'

new Vue({
    el: '#essay',
    render: h => h(essaypage)
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