<template>
	<div>
		<div id="devEbox">
			<ul id="list" class="">
				<li v-for="(list,index) in listCt" :key="list.id" v-bind:class="{listActive:list.listState}" v-on:click="changeList(index)">{{list.listName}}</li>
			</ul>
			<div id="markdown" v-if="!ctOrImg">
				<div id="input">
					<input class="input title" type="text" placeholder="请输入标题" v-model="savedata.EssayTitle">
					<input class="input autor" type="text" placeholder="请输入作者" v-model="savedata.ssayAutor">
					<input class="input preview" type="text" placeholder="请输入简介" v-model="savedata.EssayPreview">
					<div class="inputB" v-on:click="saveAndSend">发表</div>
				</div>
				<div id="editor">
					<mavon-editor style="height: 100%" v-on:change = "showHtml"></mavon-editor>
				</div>
			</div>
			<div id="add-img" v-if="ctOrImg">
					<h1>Nunfinished,please wait.</h1>
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
				{
					listName:"教师随笔",
					listState:true
				},
				{
					listName:"数学趣题",
					listState:false
				},
				{
					listName:"烧脑故事",
					listState:false,
				},
				{
					listName:"课堂游戏",
					listState:false,
				},
				{
					listName:"精灵风采",
					listState:false,
				},
				{
					listName:"课堂瞬间",
					listState:false,
				}
			],
			ctOrImg: false,
			// 需要提交的内容
			savedata: {
				EssayTitle:``,
				EssayPreview:``,
				EssayContent:``,
				EssayAutor:``,
			},
			modeldata:{
				modelHeader:'保存并发表',
    		modelContent:``,
    		yesFunction:this.sendFunction,
   			show: false
			},
		}
	},
	methods: {
		showHtml: function(cVal,originValue){
			this.savedata.EssayContent = originValue
		},
		saveAndSend: function(){
			this.modeldata.show = true
			for (let i = 0; i < this.listCt.length; i++) {
				if(this.listCt[i].listState){
					this.modeldata.modelContent = '是否将该文章保存并发送到'+this.listCt[i].listName + '?'
				}
			}
		},
		sendFunction: function(){
			axios.post('/essay/setNewEssay',{
				title:this.savedata.EssayTitle,
				autor:this.savedata.EssayAutor,
				preview:this.savedata.EssayPreview,
				content:this.savedata.EssayContent,
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
			if( e > 2 ){
				this.ctOrImg = true
			}else {
				this.ctOrImg = false				
			}
		},
		notShow:function(a){
			this.modeldata.show = a
		}
	},
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
		width: 300px;
		font-size: 1.5em;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: rgb(210,210,210);
		.listActive {
			background-color: rgb(170,170,170);
			&:hover {
				background-color: rgb(170,170,170);
			}
		}
		li {
			line-height: 100vh/6;
			&:hover {
				background-color: rgb(200,200,200);
			}
		}

	}
	#markdown {
		display: flex;
		flex-direction: column;
		margin-right: 30px;
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