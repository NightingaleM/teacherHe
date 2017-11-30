<template>
  <ul>
    <li v-for="(list,index) in essays" :key="index">
      <a v-bind:href="list.id" >{{list.EssayTitle}}</a>
      <p>{{list.EssayPreview}}</p>
    </li>
  </ul>
</template>

<script>
var mavonEditor = require('mavon-editor')
var axios = require('axios')
export default {
  name:"essay",
  data: function(){
    return {
      essays:null,
      aa:'这是aaaa'
    }
  },
  methods:{
    getEssays: function(){
      var _this = this
      axios.post('/essay/getTitle').then(function(res){
        _this.essays = res.data
// { "EssayTitle": "欢迎来到数学乐园" }
      })
    }
  },
  created(){
    this.getEssays()
  }
};
</script>


<style scoped lang="less">

</style>
