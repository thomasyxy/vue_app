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
  created () {
    this.$http({
      url: 'http://www.yinxueyuan.com/vueapp/normal',
      type: 'get',
      dataType: 'jsonp'
    }).then(function (res) {
      console.log(res.data)
    }, function (res) {
      console.log(res)
    })
  },
  mounted () {
    this.$http.jsonp('http://www.yinxueyuan.com/vueapp/jsonp?callback=hello', {}, {
      headers: {},
      emulateJSON: true
    }).then(function (res) {
      function hello (data) {
        console.log(data)
      }
      alert(res)
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
