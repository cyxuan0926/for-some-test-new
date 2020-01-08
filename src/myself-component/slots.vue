<template>
  <!-- <div class="test">
    <div v-for="item in items" :key="item.slotName">
      <slot :name="item.slotName"></slot>
    </div>
  </div> -->
  <div class="flex-dialog">
    <div v-for="elItem in elItems" :key="elItem.label + Math.random(0, 1)" :style=" elItem.style || { width: '50%' }">
      <label>{{elItem.label}}：</label>
      <span v-if="elItem.slotName" slot-scope="scope">
        <slot :name="elItem.slotName" v-bind="scope"></slot>
      </span>
      <span v-else>{{ showData[elItem['prop']] }}</span>
    </div>
  </div>
</template>
<script>
/**
 * 插槽：Vue实现了一套内容分发的API
 * 编译作用域 ：当你想在一个插槽中 使用数据时 该插槽跟模板的其他地方一样可以访问相同的实例属性(也就是相同的'作用域') 而不能访问 别的作用域
 * 父级模板里的所有内容都是在父级作用域中编译的 子模版里的所有内容都是在子作用域中编译的
 * 后备内容:插槽的默认值
 * 具名插槽：需要多个插槽时 name属性 新的语法： v-slot的参数的形式提供其名称 name属性的默认值是default v-slot只能 添加在<template>上
 * 这种情况也可以使用 v-slot
 * 独占默认插槽的缩写写法：在上述情况下 当被提供的内容 只有默认插槽时 组件的标签才可以被当作插槽的模板来使用 这样我们就可以把v-slot直接放在组件上
 * 作用域插槽: 有时让插槽内容能够访问子组件中才有的数据是很有用的 绑定在<slot>元素上的特性被称为插槽prop 只要出现多个插槽 请始终为所有的插槽使用完整的基于<template>的语法
 * 解构插槽prop 作用域插槽的内部工作原理是将你的插槽内容包括在一个传入单个参数的函数里 这意味着v-slot的值实际上可以是任何能够作为函数定义中的参数的JavaScript表达式 所有也可以
 * 使用解构赋值来传入具体的插槽prop/这样可以使模板简洁 尤其是在该插槽提供多个prop的时候 它同样开启了prop重命名等其它可能/你甚至可以定义后备内容 用于插槽prop是undefined的情形
 * 动态插槽名：动态指令参数也可以用在v-slot上 来定义动态的插槽名
 * 具名插槽的缩写 v-slot也有缩写 即把参数之前的所有内容(v-slot:)替换为字符# 然而 和其它指令一样 该缩写只在其有参数的时候才可用 如果你希望使用缩写的话 你必须始终以明确插槽名取而代之
 * 其它示例：插槽prop允许我们将插槽转换为可复用的模板 这些模板可以基于输入的prop渲染不同的内容 这在设计封装数据逻辑同时允许父组件自定义部分布局的可复用组件时是最有用的
 * 废弃了的语法：slot 和 slot-scope
 * 带有slot-scope特性的作用域插槽：在<template>上使用特殊的 slot-scope特性 可以接收传递给插槽的prop 这里的slot-scope声明了被接收的prop对象会作为slotProps变量名存在于<template>作用域
 * 中/slot-scope 特性也可以直接用于非<template>元素(包括组件) 也支持解构赋值
 *   <div class= "slot-component" >
    <!-- <a class="nav-link">
      <slot name="header" />
      <slot>submit</slot>
      <slot name="footer" />
    </a> -->
    <!-- <span>
      <slot :user="user"> {{ user.lastName }} </slot>
      <slot name="header" />
    </span> -->
  <!-- </div> -->
  <ul>
    <li
      v-for="todo in filteredTodos"
      :key="todo.id">
      <slot :name="items.slotName" :todo="todo">
        {{ todo.text }}
      </slot>
    </li>
  </ul>
  keep-alive:是Vue的内置组件 能在组件切换过程中 将状态保留在内存中 防止重复渲染DOM/包裹动态组件时 会缓存不活动的组件实例 而不是销毁他们
*/
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    elItems: Array,
    showData: Object
  },
  data () {
    return {
      user: {
        firstName: 'cy',
        lastName: 'wcx'
      },
      filteredTodos: [
        {
          id: 1,
          text: 's'
        },
        {
          id: 2,
          text: 'm'
        },
        {
          id: 3,
          text: 'd',
          isComplete: true
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
