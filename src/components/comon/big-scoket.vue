<template>
    <div >
      <img :src="url" @click="showImg($event)" v-if="url" width="300px">
    </div>
</template>

<script>
import Viewer from 'viewerjs'
export default {
  data () {
    return {
    }
  },
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  methods: {
    showImg (e) {
      let imgUrl = this.url
      return new Viewer(e.target.parentNode, {
        title: false,
        navbar: false,
        url: imgUrl
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
