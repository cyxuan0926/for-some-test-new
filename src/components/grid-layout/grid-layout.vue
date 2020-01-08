<template>
  <div class="wrapper">
    <div class="letter">A</div>
    <div class="letter">B</div>
    <div class="letter">C</div>
    <div class="letter">D</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 3fr repeat(2, 1fr);
  grid-column-gap: 1px;
  grid-template-rows: 1fr 3fr;
  grid-row-gap: 1px;
  background: black;
}
.letter {
  background-color: #0069b3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 70px;
  color: white;
  line-height: 1;
  font-family: 'hobeaux-rococeaux-background', Helvetica;
  font-weight: 200;
  cursor: pointer;
  transition: all .3s ease;
}
/*@media screen and (min-width: 500px) {*/
  /*.wrapper {*/
    /*grid-template-columns:1fr 1fr 1fr*/
  /*}*/

/*}*/
/*@media screen and (min-width: 800px) {*/
  /*.wrapper {*/
    /*grid-template-columns:repeat(4, 1fr);*/
  /*}*/
/*}*/
</style>
