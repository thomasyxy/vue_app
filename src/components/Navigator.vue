<template lang="jade">
  div#focus-ease-navigator.main-nav
    el-menu(default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect")
      el-menu-item(index="1")
        router-link(to="/home") 处理中心
      el-submenu(index="2")
        template(slot="title") 我的工作台
        el-menu-item(index="2-1") 选项1
        el-menu-item(index="2-2") 选项2
        el-menu-item(index="2-3") 选项3
      el-menu-item(index="3")
        router-link(to="/yixuan") 订单管理
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {}
}
</script>

<style lang="sass" scoped>
@import '../scss/navigator'
</style>
