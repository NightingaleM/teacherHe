import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import Header from './App'


import './teacher.less'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#NavBar',
  render: h => h(HelloWorld),
})

new Vue({
  el: 'teacher-content',
  render: h => h(Header),
})

