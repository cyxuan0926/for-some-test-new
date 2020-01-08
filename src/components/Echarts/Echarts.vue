<template>
<div class="Echarts">
  <h1>dad</h1>
</div>
</template>
<script>
// import echarts from 'echarts'
export default {
  data () {
    return {
    }
  },
  mounted () {
    // 具备高宽的DOM容器
    // init初始化一个echarts实例 通过setOption方法生成一个图表
    // const myChart = echarts.init(this.$el)
    // myChart.setOption({
    //         title : {
    //           text: '会见总量分析',
    //           left: '20%',
    //           top: '20%'
    //         },
    //         tooltip: {},
    //         labelLine: {
    //           show: false,
    //           lineStyle: {
    //             width: 10,
    //             type: 'dashed'
    //           }
    //         },
    //         label: {
    //           show: false,
    //           position: 'inside'
    //         },
    //         legend: {
    //           // padding: 0,
    //           orient: 'vertical',
    //           left: '75%',
    //           top: '32%',
    //           data: ['未授权次数(未审核数)','已通过审核待见会见次数','审核被拒绝次数','狱警未审核过期次数','审核通过未会见过期次数', '会见完成次数', '审核通过后取消次数']
    //         },
    //         series : [{
    //           type: 'pie',
    //           radius : '35%',
    //           center: ['50%', '55%'],
    //           data:[
    //             { value:335, name:'未授权次数(未审核数)' },
    //             { value:310, name:'已通过审核待见会见次数' },
    //             { value:234, name:'审核被拒绝次数' },
    //             { value:135, name:'狱警未审核过期次数' },
    //             { value:1548, name:'审核通过未会见过期次数' },
    //             { value:1548, name:'会见完成次数' },
    //             { value:1548, name:'审核通过后取消次数' }
    //           ],
    //           itemStyle: {
    //             emphasis: {
    //               shadowBlur: 10,
    //               shadowOffsetX: 0,
    //               shadowColor: 'rgba(0, 0, 0, 0.5)'
    //             }
    //           }
    //         }]
    //       })
    // myChart.setOption({
    //     title: {
    //       text: '会见申请次数',
    //     },
    //     tooltip: {},
    //     xAxis: {
    //         // data: ["从化监狱","分监区","女子监狱","陕西省未成年犯管教所","陕西省崔家沟监狱","陕西省雁塔监狱", '陕西省红石岩监狱', '广西钟山监狱', '广西未成年犯管教所', '湖南省女子监狱'],
    //         axisLine: {
    //           symbol: ['none', 'arrow'],
    //           symbolSize: [8, 10]
    //         },
    //         axisTick: {
    //           show: false
    //         },
    //         axisLabel: {
    //           interval: 0,
    //           fontStyle: 'oblique',
    //           rotate: 8,
    //           margin: 15
    //         }
    //     },
    //     yAxis: {
    //       axisLine: {
    //           symbol: ['none', 'arrow'],
    //           symbolSize: [8, 10]
    //         },
    //         axisTick: {
    //           show: false
    //         },
    //     },
    //     series: [{
    //         type: 'bar',
    //         barMaxWidth: '70%',
    //         itemStyle: {
    //           color: '#3398DB'
    //         },
    //         data: [{
    //           value: ['dsa', 234]
    //         }]
    //     }]
    //   })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Echarts {
  width: 100%;
  height: 500px;
}
</style>
