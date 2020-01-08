<template>
    <div class="hello"  >
        <el-table style="width: 100%" :data="arr" id="table-img">
          <el-table-column lable="图片01" width="400px" >
            <template slot-scope="scope" >
              <my-cy :url="scope.row.imgUrl"></my-cy>
            <!--<my-Viewer   :images="[`${scope.row.imgUrl}`]"  ref="viewer" >-->
              <!--<template slot-scope="vScope" >-->
                <!--<img :src="src" v-for="src in vScope.images" width="300px" :key="src">-->
              <!--</template>-->
            <!--</my-Viewer>-->
            </template>
          </el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from 'axios'
import Viewer from 'viewerjs'
export default {
  data () {
    return {
      arr: []
      // options: {
      //   navbar: false,
      //   title: false,
      //   toolbar: {
      //     'prev': {
      //       show: false
      //     }
      //   }
      // }
    }
  },
  mounted () {
    axios.get('banner', {
      params: {
        page: 1,
        rows: 10
      }
    }).then(res => {
      console.log(res.data)
      if (res.data.data) {
        this.arr = res.data.data.banner
        // for (let index in res.data.data.banner) {

        // this.arr.push(res.data.data.banner[index].imgUrl)
        // if (parseInt(index) === 0) this.arr.push(res.data.data.banner[index].imgUrl)
        // }
        console.log(this.arr)
      }
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    handle (e) {
      console.log(e.target.src)
      let viewer = new Viewer(document.getElementById('table-img'), {
        title: false,
        navbar: false,
        url: e.target.src
      })
      console.log(viewer)
      // viewer.show()
    },
    inited (viewer, id) {
      console.log(id)
      // console.log(1111)
      // console.log(viewer)
      // this.$refs.viewer = viewer
      // this.$refs.viewer.show()
    },
    show () {
      console.log(1)
      this.$refs.viewer.show()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
