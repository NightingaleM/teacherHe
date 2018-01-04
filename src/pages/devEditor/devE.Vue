<template>
  <div>
    <div id="devEbox">
      <ul 
        id="list"
        class="">
        <li v-for="(list,index) in listCt" :key="list.id" :class="{listActive:list.listState}" :title="list.listName" @click="changeList(index)">{{ list.listName }}</li>
      </ul>
      <ul id="essayList">
        <li v-for="(list,index) in essayList" :key="index" :title="list.EssayTitle">
          <span @click="_delete(list.id,list.EssayTitle)" title="删除">x</span>
          {{ list.EssayTitle }}
        </li>
      </ul>
      <div id="markdown">
        <div id="input">
          <input class="input title" type="text" placeholder="请输入标题"v-model="savedata.EssayTitle">
          <input class="input autor" type="text" placeholder="请输入作者" v-model="savedata.EssayAutor" v-show="hasAutor">
          <input class="input preview" type="text" placeholder="请输入简介" v-model="savedata.EssayPreview">
          <div class="inputB" @click="saveAndSend(savedata.EssayTitle)">发表</div>
        </div>
        <div id="editor">
          <mavon-editor style="height: 100%" @change = "showHtml"/>
        </div>
      </div>
    </div>
    <vue-model v-bind="modeldata" @notShow = "notShow"/>
  </div>
</template>

<script>
var mavonEditor = require('mavon-editor')
var axios = require('axios')
import 'mavon-editor/dist/css/index.css'
import vueModel from '../../components/vueModel.vue'
export default {
  name: 'devE',
  components: {
    'mavon-editor': mavonEditor.mavonEditor,
    'vue-model':vueModel,
  },
  data(){
    return {
      listCt:[
        {listName:"教师随笔",listState:true,urlName:"essay",hasAutor:true},
        {listName:"数学趣题",listState:false,urlName:"topic",hasAutor:false},
        {listName:"烧脑故事",listState:false,urlName:"story",hasAutor:false},
        {listName:"课堂游戏",listState:false,urlName:"game",hasAutor:false},
        {listName:"精灵风采",listState:false,urlName:"stPic",hasAutor:false},
        {listName:"课堂瞬间",listState:false,urlName:"clPic",hasAutor:false}
      ],
      hasAutor:true,
      // 需要提交的内容
      savedata: {
        EssayTitle:``,
        EssayPreview:``,
        EssayContent:``,
        EssayAutor:``,
      },
      modeldata:{
        modelHeader:'',
        modelContent:``,
        yesFunction: Function,
         finishedContent:'',
         show: false
      },
      essayList:[],
      nowTage:{
        urlName:'essay',
        name:'教师随笔',
        urlGet:`/essay/getTitle`,
        urlSet:`set/setNew/essay`,
        urlDelate:'set/delete/essay'
      }
    }
  },
  methods:{
    _delete: function(id,name){
      let tagId = id
      let tagUrl = this.nowTage.urlDelate
      let _this = this
      // let tageFn = function(tagUrl,tagId){
      let tageFn = function(){
        axios.post(tagUrl,{id: tagId}).then(function(res){
          _this.modeldata.finishedContent = '已删除《' + name + '》'
          _this.getEssays()
        }).catch(function(error){
          _this.modeldata.finishedContent = '出错：删除失败'
        })
      }
      this.modeldata.show = true
      this.modeldata.modelHeader = '永久删除文章'
      this.modeldata.modelContent = '是否将《' + name + '》永久删除?'
      this.modeldata.yesFunction = tageFn
    },
    getEssays: function(){
      var _this = this
      axios.post(_this.nowTage.urlGet).then(function(res){
        _this.essayList = [].concat(res.data).reverse()
      // { "EssayTitle": "欢迎来到数学乐园" }
      })
    },
    showHtml: function(cVal,originValue){
      this.savedata.EssayContent = originValue
    },
    saveAndSend: function(name){
      let _this = this
      let sendFunction = function(){
        axios({
          method:'post',
          url: _this.nowTage.urlSet,
          data:{
          'title':_this.savedata.EssayTitle,
          'autor':_this.savedata.EssayAutor,
          'preview':_this.savedata.EssayPreview,
          'content':_this.savedata.EssayContent,
          }
        }).then(function(res){
          _this.modeldata.finishedContent = '已发表《' + name + '》'
          _this.getEssays()
        }).catch(function(error){
          _this.modeldata.finishedContent = '出错：发表失败'
        })
      }
      this.modeldata.show = true
      for (let i = 0; i < this.listCt.length; i++) {
        if(this.listCt[i].listState){
          let tage = this.listCt[i].urlName
          this.modeldata.yesFunction = sendFunction
          this.modeldata.modelHeader = '保存并发表文章'
          this.modeldata.modelContent = '是否将该文章保存并发送到'+this.listCt[i].listName + '?'
        }
      }

    },
    changeList:function(e){
      for (let i = 0; i < this.listCt.length; i++) {
        this.listCt[i].listState = false
      }
      this.listCt[e].listState = true
      this.nowTage.urlName = this.listCt[e].urlName
      this.nowTage.name = this.listCt[e].listName
      this.nowTage.urlGet = `/${this.listCt[e].urlName}/getTitle`
      this.nowTage.urlSet = `set/setNew/${this.listCt[e].urlName}`
      this.nowTage.urlDelate = `set/delete/${this.listCt[e].urlName}`
      this.hasAutor = this.listCt[e].hasAutor	
      this.getEssays()
    },
    notShow:function(a){
      this.modeldata.show = a
    }
  },
  created(){
    console.log('1112121')
    this.getEssays()
  }
}
</script>
<style scoped lang="less">
h1,h2,h3,ul,li,div,input {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
#devEbox {
  height: 100vh;
  display: flex;
  justify-content: space-between;
  #list {
    height: 100%;
    width: 100px;
    font-size: 1.1em;
    text-align: center;
    padding-top: 10px;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    background-color: rgb(50,50,50);
    color: #fff;
    .listActive {
      background-color: rgb(130,130,130);
      &:hover {
        background-color: rgb(90,90,90);
      }
    }
    li {
      line-height: 40px;
      height: 40px;
      min-width: 90PX;
      &:hover {
        background-color: rgb(110,110,110);
      }
    }
  }
  #essayList {
    height: 100%;
    width: 150px;
    min-width: 90px;
    padding-top: 20px;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    background-color: rgb(200,200,200);
    // margin-right: 20px;
    .listActive {
      background-color: rgb(130,130,130);
    }
    li {
      font-family: '黑体';
      font-size: 18px;
      // line-height: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 5px 0;
      padding-left: 10px;
      border-top: 1px solid #000;
      span {
        cursor: pointer;
      }
      &:hover {
        background-color: rgb(110,110,110);
        color: #fff;
      }
    }

  }
  #markdown {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    // margin-right: 30px;
    #input {
      display: flex;
      font-size: 0;
      background-color: rgb(200,200,200);
      .input {
        background-color: rgb(240,240,240);				
        height: 40px;
        font-size: 20px;
        padding: 8px;
        color: rgb(200,200,200);
        border: none;
        border-bottom: 1px solid rgb(200,200,200);
        border-right: 1px solid rgb(200,200,200);
        &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
          color: rgb(180,180,180);
        }
      }
      .inputB {
        flex-grow: 1;
        text-align: center;
        border-right: none;
        font-size: 20px;
        line-height: 40px;
      }
      .title {
        flex-grow: 4;
      }
      .autor {
        flex-grow: 1;
      }
      .preview {
        flex-grow: 2;
      }
    }
    #editor {
      margin: auto;
      width: 100%;
      height: 580px;
      align-self: flex-end;
      flex-grow: 1;
    }
  }
}
// .listActive{
// 	color: red;
// }
// 	#editor {
// 		margin: auto;
// 		width: 80%;
// 		height: 580px;
// 	}
</style>