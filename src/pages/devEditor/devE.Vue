<template>
	<div>
		<div>
			<ul id="list" class="">
				<li v-for='value in listCt' :key='value.id'>{{value}}</li>
			</ul>
			<div id="markdown">
					<input type="text" placeholder="请输入标题" v-model="savedata.EssayTitle">
					<input type="text" placeholder="请输入作者" v-model="savedata.ssayAutor">
					<input type="text" placeholder="请输入简介" v-model="savedata.EssayPreview">
					<button v-on:click="saveAndSend">保存并发表</button>
					<div id="editor">
							<mavon-editor style="height: 100%" v-on:change = "showHtml"></mavon-editor>
					</div>
			</div>
			<div id="add-img">
					<h1>Nunfinished,please wait.</h1>
			</div>
		</div>
		<vue-model v-bind="modeldata"></vue-model>
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
				"教师随笔",
				"数学趣题",
				"烧脑故事",
				"课堂游戏",
				"精灵风采",
				"课堂瞬间"
			],
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
		},
		sendFunction: function(){
			console.log(this.savedata.EssayTitle)
		}
	},
}
</script>
















<style scoped lang="less">

	#editor {
		margin: auto;
		width: 80%;
		height: 580px;
	}
</style>