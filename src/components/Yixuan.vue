<template lang="jade">
  div.yixuan
    h1 {{ msg }}
    input(type="text" v-model="number" debounce="500")
    p {{number}}
</template>

<script>
export default {
  data () {
    return {
      msg: 'Yixuan',
      number: 123
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
