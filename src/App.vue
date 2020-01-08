<template>
<!-- :is-resizable="false"
      :is-mirrored="false"
      :vertical-compact="true      :margin="[10, 10]" -->
  <div id="app" >
    <router-view />
    <el-button type="primary">深大路口的</el-button>
    <!-- <button @click="handel" style="background:#606266">ad</button> -->
    <!-- <el-image src="http://120.78.190.101:1339/image-server/avatars/20190517144425-1558075466192.jpg?token=523b87c4419da5f9186dbe8aa90f37a3876b95e448fe2a"/> -->
    <!-- <div style="width: 60%;margin-left:10%;margin-top:5%">
      <grid-layout
        :layout.sync="layout"
        :is-resizable="false"
        :col-num="3"
        :row-height="60"
        :is-draggable="true"
        :use-css-transforms="true"
        :margin="[0, 0]"
        :vertical-compact="true"
        @layout-created="layoutCreatedEvent"
        @layout-before-mount="layoutBeforeMountEvent"
        @layout-mounted="layoutMountedEvent"
        @layout-ready="layoutReadyEvent"
        @layout-updated="layoutUpdatedEvent" >
        <grid-item
          v-for="(item, index) in layout"
          :class="['test', index !== 0 && (index + 1) % 3 === 0 ? 'border-right_item' : '', index > 5 ? 'border-bottom_item' : '']"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :key="item.i"
          @resize="resizeEvent"
          @move="moveEvent"
          @resized="resizedEvent"
          @moved="movedEvent"><span>{{item.name}}</span></grid-item>
      </grid-layout>
    </div> -->
    <!-- <m-slots :items="items">
      <template #header>
        <span>header</span>
      </template>
      <template #footer>
        <span>footer</span>
      </template>
    </m-slots> -->
    <!-- <m-slots > -->
      <!-- <template #todo="{ todo }">
        <span v-if="todo.isComplete">✓</span>
        {{ todo.text }}
      </template> -->
      <!-- <template #header>
        header
      </template> -->
      <!-- {{ user.firstName }} -->
      <!-- <template v-slot:default="slotProps">
        {{ slotProps.user.firstName }}
      </template> -->
      <!-- <template v-slot:header>
        <p>header</p>
      </template>
      <template v-slot:footer>
        <p>footer</p>
      </template> -->
      <!-- <p slot="footer">pre syntax usage</p> -->
        <!-- Logged in as {{ user.name }} -->
    <!-- </m-slots> -->
    <!-- <div id="canvas"></div> -->
    <!-- <anchored-heading :level='2'>hekko</anchored-heading> -->
    <!-- <el-table-rewrite /> -->
    <!-- <slot/> @click="handleApp"-->
    <!-- outer, once & none-once
    <div class="middle" @click="handleMiddle($event)">
      middle, capture & none-capture
      <div class="inner1" target="_blank" @click="handleInner1">
        inner1, passive & preventDefault(which is not allowed)
      </div>
      <div class="inner2"  target="_blank" @click="handleInner2">
        inner2, none-passive & preventDefault(not open new page)
      </div>
    </div>
    <div @click.alt.67="handleTest">hehls</div> -->
    <!-- <input type="text" @keydown.68="test"> -->
    <!--<button @click="handle"> 去那里去</button>-->
    <!-- <router-view/> -->
    <!-- [<form action="" @submit.prevent=N"handleSumbit">
      <input type="text" placeholder="he">
    </form>] -->
    <!-- <input type="text" @keydown="down" placeholder="down">
    <input type="text" @keypress="press" placeholder="press">
    <input type="text" @keyup.alt.67="up" placeholder="up"> -->
    <!-- <button @click.ctrl.exact="handleTest">A</button> -->
    <!-- <render-demo> -->
      <!-- <template #default="{ scope }">{{ scope.message }}</template> -->
      <!-- <template #default= "{ text }">
        <div style="color: red">{{ text}}</div>
      </template>
      <template #main>
        <div style="font-size: 24px">main</div>
      </template> -->
      <!-- <template #defalut>
      </template> -->
      <!-- <slot-componet-render>
        <div>this is your father</div>
      </slot-componet-render> -->
    <!-- </render-demo> -->
    <!-- <app-child-demo></app-child-demo> -->
    <!-- <ss-rs>
      <template #child>
      </template>
      <span>22222</span>
    </ss-rs> -->
    <!-- <cy-name :elItems="testFamilyShow" :showData="toShow" >
      <template #auditAt="{ scope }">{{ scope.auditAt | Date }}</template>
      <template #status="{ scope }">{{ scope.status | test1 }}</template>
      <template #duration="{ scope }">{{ scope.duration | time }}</template>
    </cy-name> -->
    <!-- <m-slots :elItems="testFamilyShow" :showData="toShow">
      <template #auditAt="scope">{{ scope.toShow.auditAt | Date }}</template>
      <template #status="scope">{{ scope.toShow.status | test1 }}</template>
      <template #duration="scope">{{ scope.toShow.duration | time }}</template>
    </m-slots> -->
    <!-- <jsx-component v-bind="{ id: 'someProp', a: '222' }"></jsx-component> -->
    <provide-inject-component/>
    <!-- <h1>{{foo}}</h1> -->
  </div>
</template>

<script>
// import debounce from 'lodash/debounce'
import VueGridLayout from 'vue-grid-layout'
/**
 * [this.$scopedSlots.default({
          text: this.message
        }), this.$scopedSlots.main()]
        return h('app-child-demo', {
          attrs: {
            id: 'a2'
          },
          scopedSlots: {
            default: props => {
              console.log(1, props)
              return h('div', props.showWords)
            }
          }
        })
*/
// message
// import elTableRewrite from './components/el-table-rewrite'
// 现在想实现的东西是对于别人封装好的组件怎么二次开发 通过传入他们内定的属性 就把相应的属性给加上
// v-bind / $attrs:父作用域中的 $listeners
// $slots:返回的是 { [name: string]: ?Array<VNode>} 一个对象 对象的每个成员是一个虚拟节点的数组
// $scopedSlots: 返回的是 { [name: string]: props => Array<VNode> | undefined } 返回一个对象 每个成员是一个返回数组VNode的函数 函数的参数就是插槽props 或者是 undefined
// slot: 如果组件是其它组件的子组件 需为插槽指定名称
// JSX语法写render函数
// return <el-row gutter="20" vFor={ (item, index) in this.elItems } key={ 'id-family-detail-information-item-' + index + Math.random() }>
// <el-col class={ item.definedClass }>
// <label>{ item.label }：</label>
// <template>
// <slot name={ item.prop } scope={ this.detailData }><span>{ this.detailData[item['prop']] }</span></slot>
// </template>
// </el-col>
// </el-row>
// 处理边界情况: 这里纪录的都是和处理情况有关的功能 即一些需要对Vue的规则做一些小调整的特殊情况
// 访问元素&组件 在绝大数情况下 我们最好不要出发另一个组件实例内部或手动操作DOM元素
// 访问根实例：在每个 new Vue 实例的子组件中 其根实例可以通过$root属性进行访问 对于demo或非常小型的有少量组件的应用来说这是很方便的不过这个模式扩展到中大型应用来说就不自然了 因此在绝大多数情况下 我们强烈推荐使用vuex来管理应用的状态
// 访问父组件实例 和$root 类似 $parent 属性可以用来从一个子组件访问父组件的实例 它提供了一种机会 可以在后期随时触达父组件 以替代将数据以prop的方式传入子组件的方式
// 在绝大多数情况下 触达父组件会使得你的应用更难调试和理解 尤其是当你变更了父组件的数据的时候 当我们稍后回看那个组件的时候 很难找出那个变更是从哪里发起的/ 依赖注入是个好东西
// provide/inject：(provide： Object | () => Object / inject: Array<string> | {[key: string]: string | Symbol| Object }):主要为高阶插件/组件库提供用例 并不推荐直接用于应用程序代码中
export default {
  name: 'App',
  provide: {
    bar: 'barsdasdas'
  },
  data () {
    const tettt = [{x: 0, y: 0, w: 1, h: 1, i: '0', name: 'cy0', order: 0}, {x: 1, y: 0, w: 1, h: 1, i: '1', name: 'cy1', order: 1},
      {x: 2, y: 0, w: 1, h: 1, i: '2', name: 'cy2', order: 2}, {x: 0, y: 1, w: 1, h: 1, i: '3', name: 'cy3', order: 3},
      {x: 1, y: 1, w: 1, h: 1, i: '4', name: 'cy4', order: 4}, {x: 2, y: 1, w: 1, h: 1, i: '5', name: 'cy5', order: 5}, {x: 0, y: 2, w: 1, h: 1, i: '6', name: 'cy6', order: 6},
      {x: 1, y: 2, w: 1, h: 1, i: '7', name: 'cy7', order: 7}, {x: 2, y: 2, w: 1, h: 1, i: '8', name: 'cy8', order: 8}].slice(0)
    return {
      // dynamicSlotName: 'default',
      // items: [{ slotName: 'header' }, { slotName: 'footer' }]
      testFamilyShow: [{ label: '与囚犯关系', prop: 'relationship', style: { width: '100%' } }, { label: '预约时间', prop: 'meetingTime' }, { label: '终端号', prop: 'terminalNumber' },
        { label: '审核人账号', prop: 'auditUserName' }, { label: '审核人姓名', prop: 'auditRealName' }, { label: '审核时间', slotName: 'auditAt' },
        { label: '审核状态', slotName: 'status' }, { label: '会见时长', slotName: 'duration' }, { label: '拒绝原因', prop: 'content', style: { width: '100%' } }],
      toShow: {
        relationship: '酷',
        meetingTime: '2020-01-02 09:00-09:30',
        terminalNumber: '9992',
        auditUserName: '9999_sh',
        auditRealName: '演示审核员',
        auditAt: 1576562047000,
        status: 'PASSED',
        duration: 554,
        content: ''
      },
      layout: [{x: 0, y: 0, w: 1, h: 1, i: '0', name: 'cy0', order: 0}, {x: 1, y: 0, w: 1, h: 1, i: '1', name: 'cy1', order: 1},
        {x: 2, y: 0, w: 1, h: 1, i: '2', name: 'cy2', order: 2}, {x: 0, y: 1, w: 1, h: 1, i: '3', name: 'cy3', order: 3},
        {x: 1, y: 1, w: 1, h: 1, i: '4', name: 'cy4', order: 4}, {x: 2, y: 1, w: 1, h: 1, i: '5', name: 'cy5', order: 5}, {x: 0, y: 2, w: 1, h: 1, i: '6', name: 'cy6', order: 6},
        {x: 1, y: 2, w: 1, h: 1, i: '7', name: 'cy7', order: 7}, {x: 2, y: 2, w: 1, h: 1, i: '8', name: 'cy8', order: 8}],
      orignLayout: tettt,
      recordArray: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  methods: {
    handel () {
      this.$router.push('/http-demo')
    },
    layoutCreatedEvent (newLayout) {
      console.log('Created layout: ', newLayout)
    },
    layoutBeforeMountEvent (newLayout) {
      console.log('beforeMount layout: ', newLayout)
    },
    layoutMountedEvent (newLayout) {
      console.log('Mounted layout: ', newLayout)
    },
    layoutReadyEvent (newLayout) {
      console.log('Ready layout: ', newLayout)
    },
    layoutUpdatedEvent (newLayout) {
      console.log('Updated layout: ', newLayout)
      this.orignLayout = newLayout.slice(0)
    },
    moveEvent (i, newX, newY) {
      // console.log('MOVE i=' + i + ', X=' + newX + ', Y=' + newY)
    },
    resizeEvent (i, newH, newW, newHPx, newWPx) {
      console.log('RESIZE i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx)
    },
    movedEvent (...args) {
      // w：一列的宽度 12 / w  = 列数 位置 = 列数 * newY / h + newX / w
      // 这里的i newX newY 是计算依据了
      // rowHeight: 60px 每行的高度 h 表示元素的初始高度
      // const temp = this.orignLayout.slice(0)
      // console.log(temp)
      // console.log(this.recordArray)
      let [i, newX, newY] = args
      newX = newX >= 3 ? 3 : newX
      newY = newY >= 3 ? 3 : newY
      const { x, y } = this.orignLayout[+i]
      const { x: newTestX, y: newTestY } = this.orignLayout[this.recordArray[newY * 3 + newX]]
      const copy = this.recordArray.slice(0)
      console.log('移动的元素现在layout中的位置', copy.findIndex((value) => value === +i), copy.findIndex((value) => value === newY * 3 + newX))
      console.log('移动的元素', +i, newY * 3 + newX, this.recordArray[newY * 3 + newX])
      console.log('移动到的位置区域', newX, newY)
      console.log('移动元素所对应的位置坐标', x, y, newTestX, newTestY)
      // col-num:栅栏中的列数
      // i:栅格中元素的id newX:新的行数 newY：新的列数(最好单元化)
      // 普通化 (m, n):表格，移动到的那个元素 = newX * n + newY
      // console.log('MOVED ', +i, newX, newY, newY * 3 + newX, x, y, newTestX, newTestY, this.orignLayout)
      this.$set(this.layout, +i, Object.assign({}, this.orignLayout[+i], {x: newTestX, y: newTestY}))
      // if (parseInt((+i) / 3) === newY || newX >= 3 || newY >= 3) {
      //   console.log(2222)
      //   Array.apply(null, { length: 2 - y }).map((item, index) => {
      //     this.$set(this.layout, this.recordArray[(y + index + 1) * 3 + x], Object.assign({}, this.orignLayout[this.recordArray[(y + index + 1) * 3 + x]]))
      //   })
      // }
      this.$set(this.layout, this.recordArray[newY * 3 + newX], Object.assign({}, this.orignLayout[this.recordArray[newY * 3 + newX]], {x, y}))
      // this.layout = [...this.layout, ...this.orignLayout]
      this.$set(this.recordArray, copy.findIndex((value) => value === +i), newY * 3 + newX)
      this.$set(this.recordArray, copy.findIndex((value) => value === newY * 3 + newX), +i)
      console.log('移动后现在元素所对应的位置数组', this.recordArray)
    },
    resizedEvent (i, newH, newW, newHPx, newWPx) {
      console.log('RESIZED i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx)
    }
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    'jsx-component': {
      render () {
        return <p>jsx component</p>
      }
    },
    // 'cy-name': {
    //   props: {
    //     elItems: {
    //       type: Array,
    //       default: () => []
    //     },
    //     showData: {
    //       type: Object,
    //       default: () => ({})
    //     }
    //   },
    //   render (h) {
    //     return h('div', {
    //       attrs: {
    //         class: 'flex-dialog'
    //       }
    //     }, this.elItems.map((elItem, index) => {
    //       let m
    //       if (elItem.slotName) {
    //         if (this.$scopedSlots[elItem['slotName']]) {
    //           m = h('span', {
    //           props: {
    //             key: elItem.label
    //           },
    //           key: elItem.label + Math.random(0, 1)
    //           }, [ this.$scopedSlots[elItem['slotName']]({
    //             scope: this.showData
    //           })])
    //         }
    //       } else {
    //         m = h('span', this.showData[elItem['prop']])
    //       }
    //       return h('div', {
    //         style: elItem.style || { width: '50%' },
    //         key: elItem.label + Math.random(0, 1)
    //       }, [
    //         h('label', {
    //           style: {
    //             textAlign: 'right',
    //             width: '90px',
    //             display: 'inline-block'
    //           }
    //         }, elItem.label + '：'),
    //         m
    //       ])
    //     }))
    //   }
    // },
    // 'ss-rs': {
    //   render (h) {
    //     const child = h('div', {
    //       slot: 'child',
    //       attrs: {
    //         id: 'child'
    //       },
    //       style: {
    //         color: 'red'
    //       }
    //     }, '我是child')
    //     return h('div', [this.$slots.child, this.$slots.default])
    //   }
    // },
    renderDemo: {
      data () {
        return {
          message: 'renderDemo data'
        }
      },
      render (h) {
        return h('div', {
          attrs: {
            id: 'a2'
          }
          // scopedSlots: {
          //   default: props => {
          //     console.log(1, props)
          //     return h('div', props.showWords)
          //   }
          // }
        }, this.$slots.default)
      }
    }
  },
  // components: {
  //   elTableRewrite
  // },
  mounted () {
    console.log(111, this.$root)
    // this.$message.success('图片上传成功')
    // const g2plot = require('@antv/g2plot')
    // const data = [
    //   { jailName: '从化监狱', value: 100 },
    //     { jailName: '梅溪湖大监狱分监区', value: 220 },
    //     { jailName: '广西壮族自治区女子监狱', value: 130 },
    //     { jailName: '陕西省未成年犯管教所', value: 105 },
    //     { jailName: '陕西省崔家沟监狱', value: 109 },
    //     { jailName: '陕西省雁塔监狱', value: 108 },
    //     { jailName: '陕西省红石岩监狱', value: 110 },
    //     { jailName: '广西钟山监狱', value: 210 },
    //     { jailName: '广西未成年犯管教所', value: 210 },
    //     { jailName: '湖南省女子监狱', value: 410 }
    // ]
    // const linePlot = new g2plot.Column('canvas', {
    //   data,
    //   width: 1000,
    //   xField: 'jailName',
    //   yField: 'value'
    // })
    // linePlot.render()
  }
  // methods: {
  //   // handle () {
  //   //   this.$router.push({path: '/vueApi', query: {tag: '第一百五十一条'}})
  //   // }
  //   // 默认是冒泡的
  //   handleApp () {
  //     console.log('common app')
  //   },
  //   handleMiddle (e) {
  //     // console.log(e)
  //     console.log('common middle')
  //   },
  //   handleInner1 () {
  //     console.log('common inner1')
  //   },
  //   handleInner2 () {
  //     console.log('common inner2')
  //   },
  //   handleSumbit () {
  //     console.log('submit')
  //   },
  //   handleTest (s) {
  //     console.log('alt')
  //   },
  //   down () {
  //     console.log('down')
  //   },
  //   press () {
  //     console.log('press')
  //   },
  //   up () {
  //     console.log('up')
  //   }
  // }
}
</script>

<style scoped>
.test {
  border-top:  1px solid red;
  border-left: 1px solid red;
  display: flex;
  justify-content:center;
  align-items: center;
}
.border-bottom_item {
  border-bottom: 1px solid red;
}
.border-right_item {
  border-right: 1px solid red;
}
/* .test:nth-child(3n + 3) {
  border-right: 1px solid red;
} */
/* 7 = n * m + 1 */
/* .test:nth-child(n + 7) {
  border-bottom: 1px solid red;
} */
/* #app, .middle, .inner1, .inner2 {
        display:block;
        width:520px;
        padding:15px;
        margin:15px;
        text-decoration:none;
    }
    #app{
        border:1px solid red;
        color:red;
    }
    .middle{
        border:1px solid green;
        color:green;
        width:460px;
    }
    .inner1, .inner2{
        border:1px solid purple;
        color:purple;
        width:400px;
    } */
</style>
