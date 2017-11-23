<template>
  <div id="model" v-if="show">
    <div id="model-box">
      <header>{{modelHeader}}</header>      
      <div id="model-content">{{modelContent}}</div>
      <div id="model-button">
        <button>No!</button>
        <button @click=saveAndSend>Yes!</button>
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
    show:{
      type:Boolean,
      default:false,
      },
  },
  data(){
    return {
      counter: this.yesFunction
    }
  },
  methods: {
    saveAndSend: function(){
      this.counter()
    }
  }
};
</script>
<style scoped lang="less">
  #model {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(165, 165, 165, 0.7);
    z-index: 1501;
    #model-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: rgb(150, 150, 150)
    }
  }
</style>
