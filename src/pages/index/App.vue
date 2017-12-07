<template>
  <div>
    <div id="wellcom-box">
    <div id="wellcom">
      <a href="./devE.html">
        <h1>数学的冒险乐园</h1>
      </a>
      <h1>思维的秘密宇宙</h1>
      <h1 class="iconfont bigpage-btn" v-on:click="showCt">&#xe600;</h1>
    </div>
  </div>

  <div id="content">
    <a href="" class="ct">
      <div class="content-box">
        <h2>数学趣题</h2>
      </div>
      <div class="line"></div>
      <img src="./assets/bigSun.png" alt="" class="star">
    </a>

    <a href="" class="ct">
      <div class="content-box">
        <h2>烧脑故事</h2>
      </div>
      <div class="line"></div>
      <img src="./assets/水星.png" alt="" class="star">
    </a>

    <a href="" class="ct">
      <div class="content-box">
        <h2>课堂游戏</h2>
      </div>
      <div class="line"></div>
      <img src="./assets/金星.png" alt="" class="star">
    </a>

    <a href="" class="ct">
      <div class="content-box">
        <h2>冲考题库</h2>
      </div>
      <div class="line"></div>
      <img src="./assets/地球.png" alt="" class="star">
    </a>

    <a href="" class="ct">
      <div class="content-box">
        <h2>精灵风采</h2>
      </div>
      <div class="line"></div>
      <img src="./assets/火星.png" alt="" class="star">
    </a>

    <a href="" class="ct">
      <div class="content-box">
        <h2>课堂瞬间</h2>
      </div>
      <div class="line"></div>
      <img src="./assets/木星.png" alt="" class="star">
    </a>

    <a href="./essay.html#/essays" class="ct">
      <div class="content-box">
        <h2>教师随笔</h2>
      </div>
      <div class="line"></div>
      <img src="./assets/土星.png" alt="" class="star">
    </a>

    <a href="./teacher.html" class="ct">
      <div class="content-box">
        <h2>教师简介</h2>
      </div>
      <div class="line"></div>
      <img src="./assets/天王星.png" alt="" class="star">
    </a>
  </div>
  </div>
</template>

<script>
export default {
  name: "HelloU",
  methods: {
    showCt: function(event) {
      event.path[2].className += " hiddenW";
    }
  }
};
</script>

<style lang="less" scoped>
body header h1 h2 h3 h4 h5 h6 p a ul li ol img div section {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
@font-face {
  font-family: "iconfont"; /* project id 459168 */
  src: url("http://at.alicdn.com/t/font_459168_vaq36n8lsw1p2e29.eot");
  src: url("http://at.alicdn.com/t/font_459168_vaq36n8lsw1p2e29.eot?#iefix")
      format("embedded-opentype"),
    url("http://at.alicdn.com/t/font_459168_vaq36n8lsw1p2e29.woff")
      format("woff"),
    url("http://at.alicdn.com/t/font_459168_vaq36n8lsw1p2e29.ttf")
      format("truetype"),
    url("http://at.alicdn.com/t/font_459168_vaq36n8lsw1p2e29.svg#iconfont")
      format("svg");
}
html {
  overflow: hidden;
}
.hiddenW {
  left: -100vw !important;
}
#wellcom-box {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  transition: left 500ms;
  #wellcom {
    width: 100vw;
    height: 100vh;
    z-index: 20;
    background-image: url("./assets/银河.png");
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    a {
      padding-right: 30%;
      h1{
        font-size: 3em;
        color: rgb(255, 255, 255);
        margin-top: 60px;
      }
    }
    h1 {
      font-size: 3em;
      color: rgb(255, 255, 255);
      margin-top: 60px;
      &:nth-child(2) {
        padding-right: 0;
      }
      &:nth-child(3) {
        align-self: flex-end;
        margin: 20px;
        cursor: pointer;
        transition: all 500ms;
        &:hover {
          transform: translateX(10px);
        }
      }
    }
    .iconfont {
      font-family: "iconfont";
    }
  }
}

#content {
  @view-width: 100vw;
  display: flex;
  background-image: url("./assets/银河.png");
  width: @view-width;
  height: 100vh;
  .ct {
    box-sizing: border-box;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    flex-grow: 1;
    transition: box-shadow 500ms ease-in, transform 500ms ease-in;
    .content-box {
      width: 25px;
      text-align: center;
      color: #fff;
      margin-top: 20px;
    }
    .line {
      width: 0;
      flex-grow: 1;
      transition: border 500ms;
    }
    .loop(@n) when (@n < 9) {
      @sunsize: 200%, 25%, 49%, 70%, 78%, 90%, 100%, 100%;
      &:nth-child(@{n}) {
        .star {
          width: extract(@sunsize, @n);
        }
      }
      .loop(@n + 1);
    }
    .loop(0);
    &:hover {
      box-shadow: 0px -20px 35px 0px rgba(245, 245, 245, 0.76);
      transform: translateY(-5px);
      .line {
        border: 1px solid rgba(180, 180, 180, 0.712);
      }
    }
    &:nth-child(1){
      padding-bottom: 5px;
    }
  }
}
</style>
