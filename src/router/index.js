import Vue from 'vue'
import Router from 'vue-router'
import {routes as cropperUpload} from '../components'
// eslint-disable-next-line
const env = BUILD_ENV
Vue.use(Router)
export default new Router({
  base: env === 'github' ? '/for-some-test-new' : '/',
  mode: 'history',
  routes: [
    ...cropperUpload
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      const position = {}
      if (to.hash) {
        position.selector = to.hash
      }
      if (to.matched.some(m => m.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
      }
      return position
    }
  }
})
