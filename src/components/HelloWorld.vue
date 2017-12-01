<template>
  <ul id="NavBar" @mouseover="showRocket">
    <li v-for="star in solarSystem">
      <a :href="star.linkHref">
        {{star.text}}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      solarSystem:[
        {
          linkHref:'./classMoment.html',
          text:'数学趣题'
        },
        {
          linkHref:'./classMoment.html',
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
          linkHref:'./classMoment.html',
          text:'教师随笔'
         },
        {
          linkHref:'./classMoment.html',
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
#NavBar {
  position: absolute;
  top: 20px;
  right: 30px;
  width: 150px;
  height: 500px;
  background-color: rgba(88, 88, 88, 0.31);
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
