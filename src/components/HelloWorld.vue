<template>
<div>
  <div id="header">
    <a href="index.html"><h1>何庶的数学乐园</h1></a>
    <p>巴拉巴拉巴拉巴拉吧巴拉巴拉巴拉巴拉吧</p>
  </div>
  <ul id="NavBar" @mouseover="showRocket">
    <li v-for="star in solarSystem" :key="star.index">
      <a :href="star.linkHref">
        {{star.text}}
      </a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      solarSystem:[
        {
          linkHref:'/topic.html#/topics',
          text:'数学趣题'
        },
        {
          linkHref:'/story.html#/storys',
          text:'烧脑故事'
         },
        {
          linkHref:'./classMoment.html',
          text:'课堂游戏'
         },
        {
          linkHref:'./classMoment.html',
          text:'冲考题库'
         },
        {
          linkHref:'./classMoment.html',
          text:'精灵风采'
         },
        {
          linkHref:'./classMoment.html',
          text:'课堂瞬间'
         },
        {
          linkHref:'./essay.html#/essays',
          text:'教师随笔'
         },
        {
          linkHref:'./teacher.html',
          text:'教师简介'
         }
      ],
      iconfont:{
        rocket:'火箭'
      }

    };
  },
  methods: {
    showRocket: function(){

    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
#header {
  color: #fff;
  width: 90vw;
  min-width: 800px;
  max-width: 1700px;
  margin: 0 auto;
  padding: 20px;
  a {
    color: #fff;
    text-decoration: none;    
    h1{
      padding-bottom: 5px;
    }
  }
  p{
    padding-left: 20px;
    padding-bottom: 10px;
  }
}
#NavBar {
  position: fixed;
  top: 118px;
  left: 25px;
  width: 150px;
  height: 500px;
  background-color: rgba(88, 88, 88, 0.4);
  box-shadow: 2px 2px 5px 2px #ccc;
  color: #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  li{
    text-align: center;
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-grow: 1;
    opacity: 0.6;
    line-height: 40px;
    a{
      width: 100%;
      height: 100%;
      color: #fff;
      text-decoration: none;
    }
  }
}

</style>
