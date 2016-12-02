<template lang="jade">
  div#app
    Navigator
    router-view
</template>

<script>
import Navigator from './components/Navigator'

export default {
  data () {
    return {}
  },
  mounted () {
    this.$http.jsonp('http://www.yinxueyuan.com/vueapp/jsonp?callback=hello', {}, {
      headers: {},
      emulateJSON: true
    }).then(function (res) {
      this.initData = res.data
    }, function (res) {
      console.log(res)
    })
  },
  components: {
    Navigator
  }
}
</script>

<style lang="sass">
@import './scss/main.scss'
</style>
