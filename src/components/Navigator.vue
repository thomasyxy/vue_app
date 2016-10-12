<template lang="jade">
  div.main-nav
    router-link(to="/home") Home
    router-link(to="/yixuan") Yixuan
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="sass" scoped>
@import '../scss/navigator'
</style>
