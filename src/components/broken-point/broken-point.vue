<template>
<div class= "broken-point" >
  <button @click="handleClick">Hello {{state}}</button>
</div>
</template>
<script>
export default {
  data () {
    return {
      state: 'World'
    }
  },
  methods: {
    handleClick () {
      this.state = 'World2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
