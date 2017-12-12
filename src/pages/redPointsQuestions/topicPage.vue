<template>
<div id="essay">
  <div id="essayHead">
    <h1 id="essayTitle">{{topics.EssayTitle}}</h1>
  </div>
  <div class="markdown-body" id="mdbody" v-html="topics.EssayContent"></div>
</div>
</template>
<script>
var mavonEditor = require('mavon-editor')
var axios = require('axios')
import './md.css'
export default {
  name:"topicPage",
  data: function(){
    return {
      topics:{},
      ids: ''
    }
  },
  methods:{
    getEssay: function(){
      var _this = this
      var url = `/topic/getCt?id=${this.ids}`
      axios.post(url).then(function(res){
        _this.topics = res.data[0]
      })
    }
  },
  created(){
    let ids = this.$route.params.id
    this.ids = ids
    this.getEssay()
  }
};
</script>

<style scoped lang="less">
div,h1,h2,h3,h4,a,ul,li,ol,p,span {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
#essay{
  min-height: 100vh;
  min-width: 760px;
  max-width: 1500px;
  margin-left: 200px;
  margin-right: 20px;
  background-color: #fff;
  #essayHead{
    display: flex;
    padding: 0 30px;
    line-height: 45px;
    border-bottom: 2px solid rgb(130,130,130);
    #essayTitle {
      padding-right: 0 30px;
      height: 45px;
      line-height: 45px;
      max-width: 70%;
    }

  }
  #mdbody{
    padding: 15px;
    padding-left: 30px;
    padding-top: 30px;
    background-color: #fff;
  }
}
</style>
