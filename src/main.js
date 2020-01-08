// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer/src/component.vue'
import App from './App'
import router from './router'
import './assets/styles/index.styl'
import axios from 'axios'
import '../static/css/main.css'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import my from '@/components/date-month-picker/date-month-picker'
import search from '@/components/comon/search'
import myself from '@/components/date-month-picker/date-month-picker.vue'
import myCy from '@/components/comon/big-scoket.vue'
import components from '@/myself-component'
// import * as componentsCss from '@/components/css-demo'
import '@/assets/main.css'
axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'http://120.79.251.238:8021/ywgk'
// console.log(componentsHttp)
// const adds = [{path: '/addrouter', component: componentsCss.cssDemo}]
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   // if (to.params.id) {
//   //   router.addRoutes(adds)
//   //   next({...to, replace: true})
//   // }
//   // router.addRoutes(adds)
//   next()
// })
// import Router from 'vue-router'
// const createRouter = () => new Router({
//   mode: 'history',
//   routes: []
// });
// const routerCy = createRouter();
// console.log(routerCy.matcher.match, router);
// axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:1339'
// eslint-disable-next-line
console.log(process.env, process.env.BUILD_ENV, Paasasas, VERSION, TWO, typeof global)
// 120.79.67.25
// axios.defaults.headers.common['Authorization'] = '523b87c4419da5f9186dbe8aa90f37a3876b95e448fe2a'
Vue.config.productionTip = false
Vue.config.keyCodes = {
  D: 68
}

Vue.use(ElementUI)
Vue.component('my-cy', myCy)
Vue.component('my-Viewer', Viewer)
Vue.component('m-serch', search)
Vue.component('my-date', myself)
Vue.component('child', {
  render: function (createElement) {
    // <strong><slot text='This is Child Component'></strong>
    // return createElement('strong', this.$scopedSlots.default({
    //   text: `This is Child Component`
    // }))
    return createElement('p', 'asdasd')
  }
})
Vue.component('aaa', my)
Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level, // tag name 标签名称
      this.$slots.default // 子组件中的阵列
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
Vue.component('slot-component', {
  render (h) {
    return h('div', {
      slot: 'cymasd'
    }, [
      h('h1', 'header'),
      'adaaDDSADASD'
    ])
  }
})
let fillPre = (val) => {
  return `00${val}`.slice(-2)
}
Vue.filter('Date', function (time) {
  if (!time) return ''
  else if (time < 0) return ''
  let date = new Date(time)
  let year = date.getFullYear()
  let month = fillPre(date.getMonth() + 1)
  let day = fillPre(date.getDate())
  let hour = fillPre(date.getHours())
  let minute = fillPre(date.getMinutes())
  let second = fillPre(date.getSeconds())
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
})
Vue.filter('test1', function (value) {
  if (value === 'PASSED') return '已通过'
})
Vue.filter('time', function (seconds) {
  const hours = ~~(seconds / 3600)
  const minutes = ~~(seconds % 3600 / 60)
  const second = seconds % 3600 % 60
  let result = ''
  result += hours ? `${hours}小时` : ''
  result += minutes ? `${minutes}分钟` : ''
  result += second ? `${second}秒` : ''
  return result
})
Vue.component('slot-componet-render', {
  render (h) {
    // 第二个参数 一个与模板中属性对应的数据对象 可选
    return h('div', {
      attrs: {
        id: 'slot-component-render-div'
      },
      // 如果组件是其它组件的子组件 需为插槽指定名称
      slots: 'cy-slot-component-render'
    }, this.$slots.default || 'default')
  }
})
/**
 * <div id="a1">
 *  <slot name="default" :showWords="childText">
 * </div>
*/
Vue.component('app-child-demo', {
  data () {
    return {
      childText: 'thisadadadasdasdadasd'
    }
  },
  name: 'cyddd',
  render (h) {
    return h('div', {
      attrs: {
        id: 'a1'
      },
      slot: 'CY'
    }, [this.$scopedSlots.default({
      showWords: this.childText,
      name: 'cyy',
      age: 24
    })])
  }
})
Object.keys(components).forEach((key) => {
  let name = key.replace(/(\w)/, (v) => v.toUpperCase())
  Vue.component(`m${name}`, components[key])
})
Vue.component('provide-inject-component', {
  inject: ['bar'],
  template: `<h1>{{this.bar}}</h1>`
})

/* eslint-disable no-new */
/**
 * propsData:
 *  类型：{[key: string]: any}  限制：只用于 new 创建的实例中 详细：创建实例时传递props。主要作用是方便测试。自我思考：因为是在new实例中使用 相当于是初始化了new实例中的props
 * 事件绑定：1.直接在触发时运行一些JavaScript代码 2.事件处理方法：接收一个需要调用的方法名称 3.内联处理器中的方法：在内联JavaScript语句中调用方法(如果需要访问原始的DOM事件，可以用特殊变量$event)/默认是冒泡方式
 * 事件修饰符: .stop:阻止冒泡 .prevent:阻止默认行为 .capture:捕获阶段(捕获阶段)) .self: 当事件是当前元素自身时触发(目标阶段) .once:只会调用一次 .passive: 不去阻止事件的默认行为 不要把它和.prevent一起使用 因为prevent会被忽略
 * 同事浏览器会给你一个警告
 * 修饰符的顺序：使用修饰符时候 顺序很重要 响应的代码会以同样的顺序产生
 */
let Test = Vue.extend({
  props: ['test'],
  components: { App },
  template: '<App>{{test}}</App>',
  router,
  data () {
    return {
      foo: 'asdasd'
    }
  }
})

new Test({
  propsData: {
    test: 'Hello'
  }
}).$mount('#app')
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
