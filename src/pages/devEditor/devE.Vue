<template>
	<div>
		<div id="devEbox">
			<ul id="list" class="">
				<li v-for="(list,index) in listCt" :key="list.id" v-bind:class="{listActive:list.listState}" v-bind:title="list.listName" v-on:click="changeList(index)">{{list.listName}}</li>
			</ul>
			<ul id="essayList">
				<li v-for="(list,index) in essayList" :key="index" v-bind:title="list.EssayTitle">
					<span v-on:click="" title="删除">x</span>
					{{list.EssayTitle}}
				</li>
			</ul>
			<div id="markdown">
				<div id="input">
					<input class="input title" type="text" placeholder="请输入标题" v-model="savedata.EssayTitle">
					<input class="input autor" type="text" placeholder="请输入作者" v-model="savedata.EssayAutor">
					<input class="input preview" type="text" placeholder="请输入简介" v-model="savedata.EssayPreview">
					<div class="inputB" v-on:click="saveAndSend">发表</div>
				</div>
				<div id="editor">
					<mavon-editor style="height: 100%" v-on:change = "showHtml"></mavon-editor>
				</div>
			</div>
		</div>
		<vue-model v-bind="modeldata" v-on:notShow = "notShow"></vue-model>
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
				{listName:"教师随笔",listState:true,urlName:"essay"},
				{listName:"数学趣题",listState:false,urlName:"topic"},
				{listName:"烧脑故事",listState:false,urlName:"story"},
				{listName:"课堂游戏",listState:false,urlName:"game"},
				{listName:"精灵风采",listState:false,urlName:"stPic"},
				{listName:"课堂瞬间",listState:false,urlName:"clPic"}
			],
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
    		yesFunction:null,
   			show: false
			},
			essayList:[],
			nowTage:{
				urlName:'essay',
				name:'教师随笔',
				urlGet:`/essay/getTitle`,
				urlSet:`/essay/setNew`
			}
		}
	},
	methods:{
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
		saveAndSend: function(){
			this.modeldata.show = true
			for (let i = 0; i < this.listCt.length; i++) {
				if(this.listCt[i].listState){
					var tage = this.listCt[i].urlName
					this.modeldata.yesFunction = this.sendFunction(tage)
					this.modeldata.modelHeader = '保存并发表文章'
					this.modeldata.modelContent = '是否将该文章保存并发送到'+this.listCt[i].listName + '?'
				}
			}
		},
		sendFunction: function(tage){
			var _this = this
			if(!tage) return false
			axios({
				method:'post',
				url: _this.nowTage.urlSet,
				data:{
				'title':this.savedata.EssayTitle,
				'autor':this.savedata.EssayAutor,
				'preview':this.savedata.EssayPreview,
				'content':this.savedata.EssayContent,
				}
			}).then(function(res){
				console.log(res)
			}).catch(function(error){
				console.log(error)
			})
		},
		changeList:function(e){
			for (let i = 0; i < this.listCt.length; i++) {
				this.listCt[i].listState = false
			}
			this.listCt[e].listState = true
			this.nowTage.urlName = this.listCt[e].urlName
			this.nowTage.name = this.listCt[e].listName
			this.nowTage.urlGet = `/${this.listCt[e].urlName}/getTitle`
			this.nowTage.urlSet = `/${this.listCt[e].urlName}/setNew`
			this.getEssays()
		},
		notShow:function(a){
			this.modeldata.show = a
		}
	},
	created(){
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