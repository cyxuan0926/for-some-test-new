import * as components from './cropper-upload'
import * as componentsSe from './render-function'
import * as componentsGr from './grid-layout'
import * as componentsSvg from './SVG-test'
import * as componentsHttp from './Http-demo'
import * as componentsCss from './css-demo'
import * as componentsEditor from './editor-demo'
import elMenuTest from './el-menu-test'
import * as componentVueRouter from './vue-router-test'
import * as dateMonthPicker from './date-month-picker'
import testDare from '@/components/date-month-picker/test.vue'
import * as vueApi from './vue-api'
import * as viewer from './viewer-test'
import * as brokenPoint from './broken-point'
import * as websocket from './websocket'
import * as copy from './copy'
import * as echarts from './Echarts'
import { layout } from './layout'

export default [
  {
    path: '/copy-demo',
    component: copy.copyDemo
  },
  {
    path: '/cropper-upload',
    component: components.cropperUpload
  },
  {
    path: '/render-fn',
    component: componentsSe.renderFn
  },
  {
    path: '/grid-layout',
    component: componentsGr.gridLayout
  },
  {
    path: '/svg-demo',
    component: componentsSvg.svgDemo
  },
  {
    path: '/http-demo',
    component: componentsHttp.httpDemo
  },
  {
    path: '/css-demo',
    component: componentsCss.cssDemo
  },
  {
    path: '/editor-demo',
    component: componentsEditor.editorDemo
  },
  {
    path: '/el-menu-test',
    component: elMenuTest
  },
  {
    path: '/vue-router-test/:id?',
    component: componentVueRouter.vueRouterTest,
    name: 'mycomponent'
  },
  {
    path: '/dateMonthPicker',
    component: dateMonthPicker.routes
  },
  {
    path: '/testDare',
    component: testDare
  },
  {
    path: '/vueApi',
    component: vueApi.vueApi
  },
  {
    path: '/viewerTest',
    component: viewer.viewerTest
  },
  {
    path: '/broken-point',
    component: brokenPoint.brokenPoint
  },
  {
    path: '/websocket',
    component: websocket.websocketTest
  },
  {
    path: '/echarts',
    component: echarts.routes
  },
  {
    path: '/layout',
    component: layout
  }
]
