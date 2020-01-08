<template>
    <!--<div :class="cropperWrap">-->
      <!--<h3>图片裁剪上次组件</h3>-->
      <!--<div class="cropper" >-->
        <!--<div class="cropper-area" >-->
          <!--<h5>图片上传</h5>-->
          <!--<div class="cropper-block" :style="cropperBlockStyle" id="a">-->
            <!--<input type="file" @change="readImg($event)">-->
            <!--<canvas ref="cropper" width="300px" height="300px"></canvas>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <div>
    <h1>{{string}}</h1>
  </div>
</template>

<script>
import axios from 'axios'
// https://developer.mozilla.org/zh-CN/docs/Web/API/File/Using_files_from_web_applications
// https://www.cnblogs.com/moqiutao/p/7283129.html
// import {prefixCls} from '@/utils/config'
export default {
  data () {
    return {
      // cropperSize: 300
      string: ''
    }
  },
  computed: {
    // cropperWrap () {
    //   return [`${prefixCls}-cropper-wrap`]
    // },
    // cropperBlockStyle () {
    //   return {
    //     width: `${this.cropperSize}px`,
    //     height: `${this.cropperSize}px`
    //   }
    // }
  },
  mounted () {
    let a = {
      name: 'cy',
      age: '24',
      sex: 'man'
    }
    console.log(JSON.stringify(a))
    axios.post('/json', a).then(response => {
      console.log(response.data)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    // readImg(e) {
    //   let a = document.getElementById('a')
    //   let self = this
    //   let file = e.target.files[0]
    //   let img = new Image()
    //   img.src = window.URL.createObjectURL(file)
    //   img.onload = () => {
    //     console.log(1)
    //     window.URL.revokeObjectURL(img.src)
    //   }
    //   console.log(2)
    //   a.appendChild(img)
    //   console.log(3)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
