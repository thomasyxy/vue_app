<template lang="jade">
  div#app
    Navigator
    router-view
</template>

<script>
import Navigator from './components/Navigator'

export default {
  components: {
    Navigator
  }
}
</script>

<style lang="sass">
@import './scss/main.scss'
@import './utils/scss/index.scss'
</style>
