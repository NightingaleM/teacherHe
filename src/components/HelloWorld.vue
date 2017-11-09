<template>
  <ul id="NavBar" @mouseover="showRocket">
    <li v-for="star in solarSystem">
      <a :href="star.linkHref">
        <img v-bind:src="star.starSrc" alt="">
        <p class="iconfont">
          {{iconfont.rocket}}
        </p>
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
          starSrc:'http://via.placeholder.com/305x280/c1c1c1',
          // starSrc:'./assets/bigSun.png',
          linkHref:'./classMoment.html'
        },
        {
          starSrc:'http://via.placeholder.com/305x280/c1c1c1',
          // starSrc:'./assets/水星.png',
           linkHref:'./classMoment.html'
         },
        {
          starSrc:'http://via.placeholder.com/305x280/c1c1c1',
          // starSrc:'./assets/金星.png',
          linkHref:'./classMoment.html'
         },
        {
          starSrc:'http://via.placeholder.com/305x280/c1c1c1',
          // starSrc:'./assets/地球.png',
          linkHref:'./classMoment.html'
         },
        {
          starSrc:'http://via.placeholder.com/305x280/c1c1c1',
          // starSrc:'./assets/火星.png',
          linkHref:'./classMoment.html'
         },
        {
          starSrc:'http://via.placeholder.com/305x280/c1c1c1',
          // starSrc:'./assets/木星.png',
          linkHref:'./classMoment.html'
         },
        {
          starSrc:'http://via.placeholder.com/305x280/c1c1c1',
          // starSrc:'./assets/土星2.png',
         linkHref:'./classMoment.html'
         },
        {
          starSrc:'http://via.placeholder.com/305x280/c1c1c1',
          // starSrc:'./assets/天王星.png',
          linkHref:'./classMoment.html'
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
  width: 200px;
  height: 80%;
  background-color: #000;
  box-shadow: 1px 1px 2px 2px #ccc;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  li{
    width: 100%;
    margin: 10px 0;
    a{
      display: flex;
      justify-content: space-between;
      img{
        width: 50px;
        height: 50px;
      }
    }

  }
}

</style>
