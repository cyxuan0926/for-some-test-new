/**
 * 想二次使用UI组件库里面的东西
 * 初衷：别人封装好的东西 假如每次要一个新的特性 就要去那边加上对于的属性 能不能就是传prop过去把对应的属性传过去 就能直接渲染处理
 * 设想解决思路：render函数 本质是自定义属性
*/
export default {
  name: 'cyTable',
  render (h) {
    return h('el-table', this.cols.map(col => {
      if (col.slotName) {
        return h('el-table-column', [
          h('template', [
            'sl'
          ])
        ])
      }
      return h('template')
    }), {
      props: this.test
    })
  },
  props: {
    test: {
      type: Object,
      default: () => {}
    },
    cols: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  }
}
