<template>
  <div class="css-demo">
    <h4>{{ msg }}</h4>
    <div class="main-box">
      <div class="box">
        <div class="bian zhi1"></div>
        <div class="bian zhi2"></div>
      </div>
    </div>
    <!--<div class="rotate-y" :class="{'rotate-y-active': a}" @mouseover="a = !a">-->
      <!--bb-->
    <!--</div>-->
    <!--<div class="rotate-y1" :class="{'rotate-y-active1': b}" @mouseover="b = !b">-->
      <!--bb-->
    <!--</div>-->
    <!--<div class="cube-box">-->
      <!--<div class="cube1 cube"></div>-->
      <!--<div class="cube2 cube"></div>-->
      <!--<div class="cube3 cube"></div>-->
      <!--<div class="cube4 cube"></div>-->
      <!--<div class="cube5 cube"></div>-->
      <!--<div class="cube6 cube"></div>-->
    <!--</div>-->
  </div>
</template>

<script>
import img1 from '../../assets/img/timg.jpg'
import img2 from '../../assets/img/timg (2).jpg'
// https://www.cnblogs.com/changlel/p/6385953.html#banner%E5%9B%BE
export default {
  data () {
    return {
      msg: 'css3D的魅力',
      a: false,
      b: false,
      img2: img1,
      img1: img2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-box {
  perspective: 800px;
  background: #23d19d;
  transform-style: preserve-3d;
}
.box {
  width: 300px;
  height: 300px;
  margin: 0px auto;
  transform-style: preserve-3d;
  position: relative;
  transition: 2s;
}
.box:hover {
  transform: rotateY(-180deg);
}
.bian {
  width: 300px;
  height: 300px;
  text-align: center;
  line-height: 300px;
  font-size: 100px;
  position: absolute;
}
.zhi1{
  background-color: red;
  transform:rotateX(-180deg);
}
.zhi2{
  background-color: yellow;
  backface-visibility: hidden;
}
h1,h2,h3,h5,h4 {
  text-align: center;
}
.rotate-y,.rotate-y1 {
  margin: 0px auto;
  width: 100px;
  height: 100px;
  border: 1px solid #ddd;
  transform-style: preserve-3d;
  transition: 2s;
}
.rotate-y1 {
  margin: 10px auto;
}
.rotate-y-active1 {
  transform: rotateY(-180deg);
}
.rotate-y-active {
  transform: rotateY(180deg);
}
.cube-box {
  margin: 0px auto;
  transform-style: preserve-3d;
  width: 30px;
  height: 100px;
  position: relative;
  transform: rotateX(-30deg) rotateY(45deg);
}
.cube {
  position: absolute;
  left: 0;
  top: 0;
  opacity: .5;
}
.cube1 {
  width: 100%;
  height: 100%;
  background: red;
}
.cube2 {
  width: 100%;
  height: 100%;
  background: green;
  transform: rotateY(-90deg) translate3d(15px,0,15px);
}
.cube3 {
  width: 100%;
  height: 100%;
  background: dodgerblue;
  transform-origin: right top;
  transform: rotateY(90deg);
}
.cube4 {
  width: 100%;
  height: 100%;
  background: gray;
  transform-origin: right top;
  transform: translateZ(30px);
}
.cube5 {
  width: 100%;
  padding-top: 100%;
  background: pink;
  transform-origin: left top;
  transform: rotateX(90deg);
}
.cube6 {
  width: 100%;
  padding-top: 100%;
  background: black;
  top: inherit;
  bottom: 0;
  transform-origin: left bottom;
  transform: rotateX(-90deg);
}
</style>
