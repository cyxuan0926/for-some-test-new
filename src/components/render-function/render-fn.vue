<template>
    <div class="hello">
      <detail-item :detailItems="detailItems" :totalData="totalData">
        <!-- <template #sexy="{ scope }">
          <label>{{ scope.label }}</label>{{ scope.value }}<span></span>
        </template> -->
        <template #default>
          <div>test</div>
        </template>
      </detail-item>
      <!--<anchored-heading :level="1">Hello world!</anchored-heading>-->
      <!-- <anchored-heading :level="4">Hello world!</anchored-heading> -->
      <!-- <for-test :items="items"></for-test>
      <cy-input :myValue="name" @input="val => name = val" test></cy-input>
      <input type="text" v-model="name1" >
      <input type="text" :value="name2" @input="name2 = $event.target.value">
      <h4>render函数对应的: {{name}}</h4>
      <h4>v-model对应的: {{name1}}</h4>
      <h4>原生input对应的：{{name2}}</h4>
      <cy-slots>
        <p>hello slots</p>
      </cy-slots>
      <cy-scopeSlots :todos="todos">
        <template slot-scope="{ todo }">
          <span v-if="todo.isComplete">✓</span>
          {{todo.text}}
        </template>
      </cy-scopeSlots>
      <custom-ele></custom-ele>
      <h3 style="text-align: center">nuxt render text</h3>
      <cy-transition></cy-transition> -->
    </div>
</template>

<script>
// 变量的解构赋值：从数组和对象中提取值，对变量进行赋值 解构不成功，变量就等于
// undefined 允许指定默认值 默认值可以引用解构赋值的其他变量，前提是该变量必须已经声明了
// call/aplly/bind 为了替换函数中不想要的this为想要的对象 数组的[]
// 对象的 {}
export default {
  customOption: 'foo',
  props: ['aa'],
  provide: {
    bar: 'wcx'
  },
  data () {
    return {
      items: [
        {
          name: 'cy'
        },
        {
          name: 'yanli'
        },
        {
          name: 'wcx'
        }
      ],
      myObj: {
        name: 'cy',
        age: 24,
        height: '178cm'
      },
      name: 'yanli',
      name1: '',
      name2: '',
      message: [],
      todos: [
        {
          id: 0,
          isComplete: true,
          text: 'text1'
        },
        {
          id: 1,
          isComplete: false,
          text: 'wrong text'
        },
        {
          id: 3,
          isComplete: true,
          text: 'text2'
        }
      ],
      detailItems: [
        {
          label: '用户名',
          value: 'cy',
          prop: 'name'
        },
        {
          label: '年龄',
          prop: 'age',
          value: 24
        },
        {
          label: '性别',
          slotName: 'sexy',
          prop: 'sexy'
        }
      ],
      totalData: {
        sexy: { value: '男' },
        name: { value: '蔡阳' },
        age: { label: '性别', value: 24 }
      },
      sex: 'm'
    }
  },
  filters: {
    sexy (value) {
      if (value === 'm') return '男'
      if (value === 'f') return '女'
    }
  },
  mounted () {
    // console.log(this.$options.customOption)
    // let [ x = function () {
    //   console.log('aaa')
    // }] = [1]
    // console.log(x)
    // let x
    // if ([1][0] === undefined) {
    //   x = function () {
    //     console.log('aaa')
    //   }
    // } else {
    //   x = [1][0]
    // }
    // console.log(x)
    // let [x = 1, y = x] = [undefined, 2]
    // console.log(x, y)
    // let liMei = {enname: 'Li Mei'}
    // let HanLei = {enname: 'Han Lei'}
    // function cale (arg1, arg2, arg3) {
    //   // console.log(this)
    //   console.log(this.enname + '的总工资是 ' + (arg1 + arg2 + arg3))
    // }
    // cale.call(liMei, 10000, 2000, 3000)
    // cale.apply(HanLei, [10000, 5000, 4000])
    // let WangHan = cale.bind(liMei, 10000)
    // console.log(WangHan)
    // WangHan(2000, 3500)
    // WangHan(5000, 4689)
    //  { foo }
  },
  methods: {
  },
  components: {
    'detail-item': {
      data () {
        return {
          text: 'cy'
        }
      },
      render (h) {
        let self = this
        return h('div', {
          attrs: {
            class: 'dialog-container'
          }
        }, this.detailItems.map((item, index) => {
          return h('div', {
            attrs: {
              class: 'detail-item'
            },
            scopedSlots: {
              default: props => {
                console.log(props)
                return h('span', props.text)
              }
            }
          }, Array.apply(null, { length: 1 }).map(() => {
            if (item.slotName) {
              // console.log(self.$scopedSlots)
              // return [self.$scopedSlots({
              //   scope: self.totalData[item.prop]
              // })]
            } else {
              const val = self.totalData[item.prop].value
              return [h('label', `${item.label}：`), h('span', `${val}`)]
            }
          }))
        }))
      },
      props: {
        detailItems: {
          type: Array,
          default: () => []
        },
        totalData: {
          type: Object,
          default: () => ({})
        }
      }
    },
    // 属性
    'cy-transition': {
      render: function (createElement) {
        let self = this
        return createElement('anchored-heading', {
          props: {
            level: 2
          }
        }, [
          createElement('span', 'hello'),
          self.foo
        ])
      },
      props: ['name'],
      inject: {
        foo: {
          // from: 'bar',
          default: () => [1, 2, 3]
        }
      }
    },
    'for-test': {
      render: function (createElement) {
        if (this.items.length) {
          return createElement('ul', this.items.map((item) => {
            return createElement('li', item.name)
          }))
        } else {
          return createElement('p', 'No items found')
        }
      },
      props: ['items']
    },
    'cy-input': {
      render: function (createElement) {
        let self = this
        return createElement('input', {
          domProps: {
            value: self.test ? self.myValue : 'test'
          },
          on: {
            input: function (event) {
              self.$emit('input', event.target.value)
            }
          }
        })
      },
      props: {
        myValue: {
          type: String,
          default: ''
        },
        test: Boolean
      }
    },
    'cy-slots': {
      render: function (createElement) {
        return createElement('div', this.$slots.default)
      }
    },
    'cy-scopeSlots': {
      render: function (createElement) {
        let self = this
        return createElement('ul', Array.apply(null, {length: this.todos.length}).map((val, index) => {
          return createElement('li', {
            domProps: {
              key: self.todos[index].id
            }
          }, this.$scopedSlots.default({
            todo: self.todos[index]
          }))
        }))
      },
      props: ['todos']
    },
    'custom-ele': {
      render: function (createElement) {
        return createElement('div', [
          createElement('child', {
            scopedSlots: {
              default: function (props) {
                return [
                  createElement('span', 'From Parent Component'),
                  createElement('span', props.text)
                ]
              }
            }
          })
        ])
      }
    }
    // 'child': {
    //   render: function (createElement) {
    //     // <strong><slot text='This is Child Componet'></slot></strong>
    //     return createElement('strong', 'This is Child Component')
    //   }
    // }
    // 'anchored-heading': {
    //   template: `
    //     <h1 v-if="level === 1">
    //     <slot></slot>
    //     </h1>
    //     <h2 v-else-if="level === 2">
    //     <slot></slot>
    //     </h2>
    //     <h3 v-else-if="level === 3">
    //       <slot></slot>
    //     </h3>
    //     <h4 v-else-if="level === 4">
    //       <slot></slot>
    //     </h4>
    //     <h5 v-else-if="level === 5">
    //       <slot></slot>
    //     </h5>
    //   `,
    //   props: {
    //     level: {
    //       type: Number,
    //       required: true
    //     }
    //   }
    // }
    // 'anchored-heading': {
    //   // createElement 一个回调函数
    //   render: function (createElement) {
    //     console.log(this)
    //     // console.log(this.$slots.default)
    //     // return createElement('h' + this.level, this.$slots.default)
    //     let headingId = getChildrenTextContent(this.$slots.default)
    //       .toLowerCase()
    //       .replace(/\w+/g, '-')
    //       .replace(/(^\-|\-$)/g, '')
    //     console.log(headingId)
    //     return createElement('h' + this.level, [
    //       createElement('a', {
    //         attrs: {
    //           name: headingId,
    //           href: '#' + headingId
    //         }
    //       }, this.$slots.default)
    //     ])
    //   },
    //   props: {
    //     level: {
    //       type: Number,
    //       required: true
    //     }
    //   }
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
