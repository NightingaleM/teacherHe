<template>
<div id="essay">
  <div id="essayHead">
    <h1 id="essayTitle">{{essays.EssayTitle}}</h1>
    作者：{{essays.EssayAutor}}
  </div>
  <div class="markdown-body" id="mdbody" v-html="essays.EssayContent"></div>
</div>
</template>
<script>
var mavonEditor = require('mavon-editor')
var axios = require('axios')
import './md.css'
export default {
  name:"essayPage",
  data: function(){
    return {
      essays:{},
      ids: ''
    }
  },
  methods:{
    getEssay: function(){
      var _this = this
      var url = `/essaypage/getCt?id=${this.ids}`
      axios.post(url).then(function(res){
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
    let ids = this.$route.params.id
    this.ids = ids
    console.log(ids)
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
