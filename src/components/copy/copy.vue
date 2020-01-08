<template>
<div class= "copy" >
  <button @click="handle">点击</button>
</div>
</template>
<script>
import axios from 'axios'
// import qs from 'qs'
export default {
  data () {
    return {
    }
  },
  methods: {
    handle () {
      axios.get('/user/test').then(res => {
        console.log(res)
      })
      // axios.post('/users/login', qs.stringify({
      //   password: '3m4c3n9J',
      //   username: 'admin',
      //   prison: -1
      // }), {
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //   }
      // }).then(res => {
      //   console.log(res)
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
