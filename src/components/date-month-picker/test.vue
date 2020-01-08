<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <my-date :startDateValue.sync="startValue" :endDateValue.sync="endValue"></my-date>
        <button @click="hand">click</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello VueJS',
      searchItems: {
        name: { type: 'input', label: '姓名' },
        prisonerNumber: { type: 'input', label: '囚号' },
        time: { type: 'monthrange', start: 'start', end: 'end' }
        // prisonArea: JSON.parse(localStorage.getItem('user')).prisonConfigList.length === 1 ? { label: '监区', type: 'input', value: `${JSON.parse(localStorage.getItem('user')).prisonConfigList[0].prisonConfigName}`, disabled: true } : { label: '监区', type: 'select', options: JSON.parse(localStorage.getItem('user')).prisonConfigList, belong: { value: 'prisonConfigName', label: 'prisonConfigName' } }
      },
      startValue: null,
      endValue: null
    }
  },
  methods: {
    hand () {
      console.log(this.startValue)
      console.log(this.endValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
