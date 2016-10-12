<template lang="jade">
  div.main-container
    img.logo(src="../assets/logo.png")
    hello
    p Welcome to your Vue.js app!
    p
      | To get a better understanding of how this boilerplate works, check out
      a(href="http://vuejs-templates.github.io/webpack" target="_blank") its documentation
      | It is also recommended to go through the docs for
      a(href="http://webpack.github.io/" target="_blank") Webpack
      | and
      a(href="http://vuejs.github.io/vue-loader/" target="_blank") vue-loader
      | If you have any issues with the setup, please file an issue at this boilerplate's
      a(href="https://github.com/vuejs-templates/webpack" target="_blank") repository
    p
      | You may also want to checkout
      a(href="https://github.com/vuejs/vue-router/" target="_blank") vue-router
      | for routing and
      a(href="https://github.com/vuejs/vuex/" target="_blank") vuex
      | for state management.
</template>

<script>
import Hello from './Hello'
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {
    Hello
  }
}
</script>

<style lang="sass">
</style>
