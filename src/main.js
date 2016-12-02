// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import configRoutes from './configs/routes'
import '../theme/index.css'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: configRoutes('global')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
