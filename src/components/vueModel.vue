<template>
  <div id="model" v-if="show">
    <div id="model-box">
      <h2>{{modelHeader}}</h2>      
      <div class="model-content" v-show="!isSend">{{modelContent}}</div>
      <div class="model-content" v-show="isSend">{{finishedContent}}</div>      
      <div id="model-button">
        <button @click="donot" v-show="!isSend">No!</button>
        <button @click="doIt" v-show="!isSend">Yes!</button>        
        <button @click="sendSuccess" v-show="isSend">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vueModel',
  props: {
    modelHeader:String,
    modelContent:String,
    yesFunction:Function,
    finishedContent:String,
    show:{
      type:Boolean,
      default:false,
      },
  },
  data(){
    return {
      isSend: false,
    }
  },
  methods: {
    doIt: function(){
      this.yesFunction()
      this.isSend = true
    },
    sendSuccess:function(){
      this.notShow()
      this.isSend = false
    },
    donot: function(){
      this.notShow()
    },
    notShow: function(){
      this.$emit('notShow',false)
    }
  }
};
</script>
<style scoped lang="less">
h1,h2,div,p,li,ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
  #model {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(190, 190, 190, 0.4);
    z-index: 1501;
    #model-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: rgb(255, 255, 255);
      border-radius: 20px;
      overflow: hidden;
      min-width: 450px;
      min-height: 300px;
      text-align: center;
      box-shadow: 1px 3px 7px 6px rgba(165,165,165,0.7);
      h2 {
        padding: 30px;
        background-color: rgb(255,255,255);
        font-size: 2em;
      }
      .model-content {
        padding: 20px;
        font-size: 1.5em;
      }
      button {
        margin: 40px;
        padding: 10px 20px 10px 20px;
        border: none;
      }
    }
  }
</style>
