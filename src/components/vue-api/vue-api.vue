<template>
    <div class="hello" >
      <div @click="handle" ref="anhoctor"></div>
      <div v-html="law.contents"></div>
    </div>
</template>

<script>
// import Vue from 'vue'
// https://blog.csdn.net/zhangxin09/article/details/51324111 图片上传node
// import axios from 'axios'
export default {
  data () {
    return {
      law: {}
    }
  },
  mounted () {
    // axios.get('http://123.57.7.159:8083/ywgk-demo/api/laws/details?id=33').then(res => {
    //   res.data.data.law.contents = res.data.data.law.contents.replace(this.$route.query.tag, `<span id="tag">${this.$route.query.tag}</span>`)
    //   this.law = res.data.data.law
    //   this.$nextTick(() => {
    //     this.$refs.anhoctor.click()
    //   })
    // }).catch(err => {
    //   console.log(err)
    // })
    // console.log(this.$route.query.tag)
    // this.$refs.anhoctor.click()
    // Vue.config是一个对象，包含Vue的全局配置。可以在启动应用之前修改
    // silent 取消Vue所有的日志和警告 类型：Boolean，默认值是false
    // errorHandler 指定组件的渲染和观察期间未捕获错误的处理函数，可获取错误信息和Vue实例
    // console.log(Vue.config)
  },
  methods: {
    a () {
      console.log(1111)
    },
    handle () {
      document.getElementById('tag').scrollIntoView()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
