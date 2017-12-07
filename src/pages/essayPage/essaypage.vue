<template>
<div id="essay">
  <div id="EssayTitle">{{essays.EssayTitle}}</div>
  <div id="EssayAutor">{{essays.EssayAutor}}</div>
  <div class="markdown-body" id="mdbody" v-html="essays.EssayContent"></div>
</div>
</template>
<script>
var mavonEditor = require('mavon-editor')
var axios = require('axios')
import './md.css'
export default {
  name:"essay",
  data: function(){
    return {
      essays:{}
      
    }
  },
  methods:{
    getEssays: function(){
      var _this = this
      axios.post('/essaypage/getCt?id=6').then(function(res){
        _this.essays = res.data[0]
        console.log(_this.essays)
/*
EssayAutor:"测试作者"
EssayContent:"<h1>测试正文</h1>↵<p>测试<br />↵<ins>测试</ins><br />↵<s>测试</s><br />↵<mark>测试</mark></p>↵"
EssayPreview:"测试简介"
EssayTitle:"测试标题"
createdAt:"2017-12-01 02:29:52.100 +00:00"
id:2
updatedAt:"2017-12-01 02:29:52.100 +00:00"
*/
      })
    }
  },
  created(){
    this.getEssays()
  }
};
</script>

<style scoped lang="less">
*{color:#fff}
</style>
