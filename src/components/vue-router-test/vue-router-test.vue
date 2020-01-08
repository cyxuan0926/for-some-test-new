<template>
    <div class="hello">
      <h1>Hello App!</h1>
      <button @click="handleCall">跳转</button>
      <button @click="handleCY">动态添加</button>
      <h2>{{$route.params.id}}</h2>
      <!-- <h1>{{newMessage}}</h1> -->
      <!-- <router-view></router-view>
      <button @click="historyClick">history跳转</button> -->
    </div>
</template>

<script>
// vue router是vue.js集成的模块。将组件(components)映射到路由(routes).this.$router是路由访问器。this.$route是当前路由
// 动态路由匹配：某种模式匹配到的所有路由，全部映射到同个组件上。动态路径参数 以冒号开头 route.params/query/hash
// 响应路由参数的变化 '$route' 或者beforeRouteUpdate
export default {
  data () {
    return {
      msg: 'hello VueJS',
      newMessage: 'This is the test of vue-router',
      id: null
    }
  },
  // watch: {
  //   '$route' (to, from) {
  //     console.log(to, from)
  //   }
  // },
  //
  methods: {
    handleCall () {
      this.id = parseInt(Math.random() * 10)
      this.$router.push({name: 'mycomponent', params: {id: this.id}})
    },
    historyClick () {
      console.log(window.history)
      this.$router.go(-1)
    },
    handleCY () {
      this.$router.push({path: '/addrouter'})
    }
  },
  beforeRouteUpdate (to, from, next) {
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
