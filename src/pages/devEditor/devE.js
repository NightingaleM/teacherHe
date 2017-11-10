import Vue from 'vue';
import dev from './devE.vue'
// var editor = require('./editor.vue');

new Vue({
    el: '#main',
    render: h => h(dev)
});

// import Vue from 'vue';
// var editor = require('./editor.vue');
// new Vue({
//     el: '#main',
//     render: h => h(editor)
// });