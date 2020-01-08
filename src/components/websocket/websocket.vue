<template>
<div class= "websocket" >
  <h1>Hello websocket</h1>
</div>
</template>
<script>
// import { Socket } from 'net';
// websocket 是一个持久化的协议 基于http协议 轮询 就是浏览器每隔几秒就发一次请求，寻问服务器是否有新消息
// long poll:和轮询差不多 只是客户端发起连接后，如果没有消息就一直不返回response给客户端，直到有消息才返回
// 回调 心跳重连 当send()
// 现在的目标是断开了连接(不管什么情况) 就要去重新连接
export default {
  data () {
    return {
    }
  },
  mounted () {
    let socket = new WebSocket('ws://localhost:9001')
    socket.onopen = (e) => {
      console.log(e, '连接上了')
    }
    socket.onmessage = (e) => {
      console.log(e)
      // if (!e) socket.close()
    }
    socket.onclose = (e) => {
      console.log('close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
