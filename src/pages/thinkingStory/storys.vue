<template>
<div id="essay">
  <ul id="essay-list">
    <li v-for="(list,index) in storys" :key="index">
      <router-link :to="{path:'/storyPage/'+list.id,query:{name:'story'}}" ><h1>{{list.EssayTitle}}</h1></router-link>

      <p>{{list.EssayPreview}}</p>
    </li>
  </ul>
</div>
</template>
<script>
var mavonEditor = require('mavon-editor')
var axios = require('axios')
export default {
  name:"storys",
  data: function(){
    return {
      storys:null,
    }
  },
  methods:{
    getEssays: function(){
      var _this = this
      axios.post('/story/getTitle').then(function(res){
        _this.storys = [].concat(res.data).reverse()
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
div,h1,h2,h3,h4,a,ul,li,ol,p,span {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
  #essay{
    display: flex;
    min-height: 100vh;
    min-width: 760px;
    max-width: 1500px;
    margin-left: 200px;
    margin-right: 20px;
    background-color: rgba(230,230,230,0.25);
    #essay-list {
      display: flex;
      flex-direction: column;
      // background-color: rgb(170,170,170);
      width: 100%;
      li {
        background-color: rgba(88, 88, 88, 0.31);  
        margin: 10px 0;
        padding: 0 35px;
        a {
          text-decoration: none;
          display: flex;
          align-items: flex-end;
          padding: 1px;
          color: rgb(240,240,240);
          div {
            margin-left: 20px;
            font-size: 0.8em;
          }
        }
        p {
          color: rgb(240,240,240);
          padding: 15px;
          text-indent:25px;
          font-size: 15px;
          line-height: 20px;
          letter-spacing: 3px;
        }
      }
    }
  }
</style>
