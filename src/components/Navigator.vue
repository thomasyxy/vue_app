<template lang="jade">
  div#focus-ease-navigator.main-nav
    ul.focus-ease-list
      - var navList = [{name: "home", title: "Home", params: { msg: 123 }},{name: "yixuan", title: "yixuan"},{name: "page1", title: "page1"},{name: "page2", title: "page2"},{name: "page3", title: "page3"},{name: "page3", title: "page4"}]
      - each item, index in navList
        li.focus-ease-item
          router-link(:to="{ name: '#{item.name}', params: '!{item.params}' }") #{item.title}
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {

  },
  components: {}
}
</script>

<style lang="sass" scoped>
@import '../scss/navigator'
</style>
