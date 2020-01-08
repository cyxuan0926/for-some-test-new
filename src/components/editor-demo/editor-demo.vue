<template>
  <div class="editor-demo">
    <h4>{{ msg }}</h4>
    <div contenteditable="true" id="rech-editor" @click="editor">
      <p>百度EUX团队</p>
    </div>
  </div>
</template>

<script>
// 光标操作
export default {
  data () {
    return {
      msg: 'javascript实习富文本编辑器'
    }
  },
  mounted () {
  },
  methods: {
    editor () {
      let range = window.getSelection().getRangeAt(0)
      let textEle = range.commonAncestorContainer
      console.log(range)
      console.log(textEle)
    },
    resetRange (startContainer, startOffset, endContainer, endOffset) {
      let selection = window.getSelection()
      selection.removeAllRanges()
      let range = document.createRange()
      range.setStart(startContainer, startOffset)
      range.setEnd(endContainer, endOffset)
      selection.addRange(range)
    },
    findParentByTagName (root, name) {
      let parent = root
      if (typeof name === 'string') {
        name = [name]
      }
      while (name.indexOf(parent.nodeName.toLowerCase()) === -1 && parent.nodeName !== 'BODY' && parent.nodeName !== 'HTML') {
        parent = parent.parentNode
      }
      return parent.nodeName === 'BODY' || parent.nodeName === 'HTML' ? null : parent
    },
    adjustList () {
      let lists = document.querySelectorAll('ol, ul')
      for (let i = 0; i < lists.length; i++) {
        let ele = lists[i]
        let parentNode = ele.parentNode
        if (parentNode.tagName === 'p' && parentNode.lastChild === parentNode.firstChild) {
          parentNode.insertAdjacentElement('beforebegin', ele)
          parentNode.remove()
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,h2,h3,h4,h5 {
  text-align: center;
}
#rech-editor {
  width: 80%;
  height: 50px;
  margin: 0px auto;
  vertical-align: middle;
  border: 1px solid #ddd;
  text-indent: 15px;
}
</style>
