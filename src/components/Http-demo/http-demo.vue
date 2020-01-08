<template>
    <div class="hello">
      <span :class="obj">Hello</span>
      <button @click="authhandle">获取</button>
      <!-- <button :disabled="cc">hello world</button> -->
      <!-- <a v-bind="{[attributeName]: url}" >Go to baidu</a>
      <a :[attributeName]="url" >Go to baidu</a> -->
      <!-- <input type="file" id='image' accept="image/*" capture='camera'>
      <button @click="handleSetCookies">存储cookies</button>
      <button @click="handleGetCookies">获取cookies</button> -->
      <!--<input type="file" @change="handler($event)">-->
      <!-- <button @click="handleget">GetHttp</button> -->
      <!-- <button @click="handlePost">PostHttp</button> -->
      <!-- <input type="file" name="file" @change="handleChange($event)"> -->
      <!-- <img :src="img" alt=""> -->
      <!-- <button @click="handleDelet">删除</button> -->
      <!-- <span @click="a">asdasd</span> -->
      <!-- <input type="file"  id="file"> -->
      <!-- <input type="text" id="text"> -->
      <!-- <input  type="file" name="uuid" v-for="item of uploadNum" ref="uploadRef" :key="item"> -->
      <!-- <button @click="handleUpload">提交</button> -->
      <!-- <button @click="handleTest1">测试</button> -->
      <!--<video :src="item" v-for="(item, index) of videoSrc" :key="index" controls="controls"></video>-->
      <!--<audio :src="item" v-for="(item, index) of videoSrc" :key="index" controls="controls"></audio>-->
      <!--<audio :src="url" controls="controls"></audio>-->
      <!--<img :src="url" alt="">-->
      <!--<aaa></aaa>-->
    </div>
</template>

<script>
// 混入(mixins)是一种分发Vue组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项，当组件使用混入对象时，所有
// 混入对象的选项将会被混入该组件本身的选项。
import axios from 'axios'
import Moment from 'moment'
import Cookies from 'js-cookie'
import qs from 'querystring'
// import qs from 'qs'
export default {
  data () {
    return {
      img: '',
      num: 1,
      uploadNum: 12,
      filesArr: [],
      videoSrc: [],
      // url: '',
      attributeName: 'href',
      url: 'http://www.baidu.com',
      obj: {
        red: true,
        bolder: true
      }
    }
  },
  methods: {
    authhandle () {
      let params = {
        username: 'demo',
        password: 123456,
        grant_type: 'password',
        mode: 'account_password'
      }
      axios.post('http://qa.api.auth.prisonpublic.com/oauth/token', qs.stringify(params), {
        auth: {
          username: 'visit.admin',
          password: '3cceca7160774a40b01c7fdadfb37da0'
        }
      }).then(res => {
        console.log(res)
      })
    },
    handleSetCookies () {
      Cookies.set('token', {name: 'cy'})
    },
    handleGetCookies () {
      console.log(Cookies.getJSON('token'))
      // console.log(JSON.parse(Cookies.get('token')))
    },
    handleTest1 () {
      axios.post('/login', {
        name: 'cy',
        pw: 123
      }).then(response => {
        console.log(response.data)
      }).catch(err => {
        console.log(err)
      })
    },
    handleTest () {
      axios.get('/uploads/resources', {
        params: {
          urls: ['http://120.79.67.25:1339/image-server/avatars/MVC-1534756917468.jpg']
        }
      }).then(response => {
        console.log(response.data)
      }).catch(err => {
        console.log(err)
      })
    },
    change (e) {
      let formData = new FormData()
      for (let val of e.target.files) {
        formData.append('video', val)
      }
      axios.post('/video-server/videos', formData).then(res => {
        console.log(res.data)

        // res.data.url.map(val => {
        //   console.log(val)
        //   this.videoSrc.push(val)
        // })
      }).catch(err => {
        console.log(err)
      })
    },
    handleUpload () {
      // console.log(this.$refs.uploadRef)
      let formData2 = new FormData()
      let ao = document.getElementById('file')
      // for (let i = 0; i < this.$refs.uploadRef.length; i++) {
      //   formData2.append('uuid', this.$refs.uploadRef[i].files[0])
      // }
      formData2.append('uuid', ao.files[0])
      console.log(formData2)
      axios.post('/image-server/uuids', formData2).then(res => {
        console.log(res.data)
        this.url = res.data.url
        // res.data.url.map(val => {
        //   console.log(val)
        //   this.videoSrc.push(val)
        // })
      }).catch(err => {
        console.log(err)
      })
    },
    handleDelet () {
      console.log(axios.defaults.headers)
      let arr = ['http://120.78.190.101:1339/audio-server/audios/Vladimir Cosma - Reality-1535351323101.mp3', 'https://www.yuwugongkai.com/image-server/uuids/Ag4.0核心思想-1535701310090.png', 'https://www.yuwugongkai.com/image-server/avatars/banner720400-1535007817533.jpg']
      axios.delete('/delete/resources', {
        data: {
          urls: arr
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      // axios.post('/ywgk/users/login', {
      //   name: 'cy'
      // }).then(req => {
      //   console.log(req)
      // }).catch(err => {
      //   console.log(err)
      // })
      // let b = '20180802124305-1533220025940.mp4'
      // let name = {name1: 'aa', name2: 'cc'}
      // axios.delete(`/video-server/resources`, {
      //   name
      // }).then(res => {
      //   console.log(res.data)
      // }).catch(err => {
      //   console.log(err)
      // })
    },
    // delete方法传参 https://www.cnblogs.com/pangguoming/p/8994742.html
    a () {
      axios.get(`/trial/${this.num}`).then(response => {
        console.log(response.data)
      }).catch(err => {
        console.log(err)
      })
    },
    // handler (e) {
    //   let formData = new FormData()
    //   formData.append('file', e.target.files[0])
    //   console.log(formData)
    //   let httpRequest = new XMLHttpRequest()
    //   let baseUrl = 'http://localhost:9000/json'
    //   httpRequest.onreadystatechange = function () {
    //     if (httpRequest.readyState === 4 && httpRequest.status === 200) {
    //       console.log(httpRequest.responseText)
    //     }
    //   }
    //   httpRequest.open('POST', baseUrl)
    //   httpRequest.setRequestHeader('Content-type', 'application/json;application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data')
    //   httpRequest.send(formData)
    // },
    handleget () {
      let obj = {
        userName: 'cy',
        password: '123',
        age: 24,
        sex: 0
      }
      let str = 'page=10'
      let arr = ['cy', '123', 24]
      console.log(obj)
      console.log(str)
      console.log(arr)
      // get方法
      let getUrl = `http://localhost:9000/hello`
      // 1.不带参数的
      // this.handleHttp('get', getUrl)
      //  1.参数是字符串的
      //   this.handleHttp('get', getUrl, str)
      //  2.参数是对象的
      //   this.handleHttp('get', getUrl, obj)
      //  3 参数是数组的
      this.handleHttp('get', getUrl, arr)
    },
    handlePost () {
      let postUrl = 'http://localhost:9000/json'
      let str = 'page=10&name=cy'
      // POST方法
      // 1.不带参数
      // this.handleHttp('POST', postUrl)
      // 2.参数为字符串
      this.handleHttp('POST', postUrl, str)
    },
    // 原生ajax
    handleHttp (method, url, ...data) {
      let httpRequest = new XMLHttpRequest()
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          console.log(httpRequest.responseText)
        }
      }
      if (method === 'GET' || method === 'get') {
        if (typeof data[0] === 'string') {
          url += ~url.indexOf('?') ? `&${data[0]}` : `?${data[0]}`
        } else {
          let arr = []
          for (let index in data[0]) {
            arr.push(`${encodeURIComponent(index)}=${encodeURIComponent(data[0][index])}`)
          }
          let params = arr.join('&')
          url += ~url.indexOf('?') ? `&${params}` : `?${params}`
        }
        httpRequest.open('GET', url)
      } else if (method === 'POST' || method === 'post') {
        httpRequest.open('POST', url)
      }
      httpRequest.setRequestHeader('Content-type', 'application/json;application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data')
      if (method === 'GET' || method === 'get') {
        httpRequest.send()
      } else {
        httpRequest.send(data[0])
      }
    },
    handleChange (e) {
      let formData = new FormData()
      formData.append('file', e.target.files[0])
      axios.post('/login', formData).then(response => {
        console.log(response.data)
        this.img = response.data
      }).catch(err => {
        console.log(err)
      })
    },
    letTest () {
      let cy = 'na'
      {
        let cy = 'mama'
        console.log(cy)
      }
      console.log(cy)
    },
    jiegouFun ([x, y]) {
      console.log(x + y)
    },
    move ({x, y} = {x: 0, y: 0}) {
      return [x, y]
    },
    move1 ({x = 0, y = 0} = {}) {
      return [x, y]
    }
  },
  mounted () {
    this.$message.closeAll()
    // axios.post('/users/login', qs.stringify({
    //     password: '3m4c3n9J',
    //     username: 'admin',
    //     prison: -1
    //   }), {
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    //   }).then(res => {
    //     console.log(res)
    //   })
    // let a = -0
    // if(-0.111) {
    //   console.log(111111222)
    // }
    // else {
    //   console.log(222324)
    // }
    // nginx反向代理proxy_pass 负载均衡 upstream
    // 负载机 103.110.186.8/192.168.1.8
    // console.clear()
    // let st = 'hello world'
    // console.log('cy'.repeat(3.1))
    // console.log(Number('na'))
    // console.log(st.includes('hello'))
    // console.log(st.endsWith('world'))
    // console.log(this.move())
    // console.log(this.move1())
    // let {toString: s} = 123
    // let {toString: b} = true
    // let num = 234
    // let bolean = false
    // console.log(s === Number.prototype.toString)
    // console.log(b === Boolean.prototype.toString)
    // console.log(Number.prototype.toString())
    // console.log(Boolean.prototype.toString())
    // console.log(b.call(bolean))
    // console.log(s.call(num))
    // 对象解构 可以很方便地将现有的方法 赋值到某个变量
    // 数组本质是特殊的对象 所以可以对数组进行对象属性的解构
    // 字符串的解构赋值：此时字符串被转换成一个类似数组的对象
    // 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值
    // 数值和布尔值的解构赋值
    // 函数参数的解构
    // 圆括号的情况： 赋值语句下的非模式部分
    // 字符串的扩展 indexof() includes()是否包含 startsWith()头部 endsWith()尾部 repeat()重复
    // repeat() 重复字符串 如果是小数 舍弃小数部分取整数部分 如果是非0~-1之间的负数和Infinity 则报错 如果是0~-1之间的数或者Nan 则相当于0
    // 如果是字符串 则把字符串转为数字类型的 再来运算
    // 字符串的补全长度功能 padStart() padEnd()
    this.jiegouFun([1, 2])
    this.letTest()
    document.onkeydown = (e) => {
      if (e.keyCode === 115) {
        this.handleTest()
      }
    }
    // http://tieba.baidu.com/p/2613341284
    console.log(Moment('2018-06-26').isAfter('2018-06-26'))
    let myDate = new Date()
    console.log(myDate.toLocaleDateString().replace(/\//g, '-'))
    let formData = new FormData()
    formData.append('name', 'cy')
    axios.post('/login', formData).then(response => {
      console.log(response.data)
    }).catch(err => {
      console.log(err)
    })
    // let obj = {
    //   userName: 'cy',
    //   password: '123',
    //   age: 24,
    //   sex: 0
    // }
    // let arr = []
    // // post请求的时候序列化：
    // let params = new URLSearchParams()
    // for (let key in obj) {
    //   params.append(key, obj[key])
    // }
    // for (let key in obj) {
    //   arr.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    // }
    // let search = arr.join('&')
    // https://blog.csdn.net/qq_31070475/article/details/72598500
    // let url = `http://localhost:9001/hello`
    // url += ~url.indexOf('?') ? `&${search}` : `?${search}`
    // console.log(url)
    let postUrl = 'http://localhost:9001/login'
    let httpRequest = new XMLHttpRequest()
    // if (window.XMLHttpRequest) {
    //   httpRequest = new XMLHttpRequest()
    // } else {
    //   httpRequest = new ActiveXObject('Microsoft.XMLHTTP')
    // }
    // let httpRequest = window.XMLHttpRequest ? new XMLHttpRequest() : window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHttp') : undefined
    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        console.log(httpRequest.responseText)
      }
    }
    httpRequest.open('post', postUrl)
    // let formData = new FormData()
    // formData.append('id', 5)
    // formData.append('name', '#yin')
    httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    // httpRequest.setRequestHeader('Content-type', 'application/json')
    httpRequest.send(formData)
  },
  destroyed () {
    axios.post('/login', {
      name: 'cy',
      pw: 123
    }).then(response => {
      console.log(response.data)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border: none;
  box-shadow: none;
  background: dodgerblue;
  padding: 8px;
}
.red{
  color: red;
}
.bolder {
  font-size: 24px;
}
</style>
