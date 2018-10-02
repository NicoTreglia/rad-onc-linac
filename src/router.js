import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HomeAdmin from './views/Home-Admin.vue'
import Status from './views/Status.vue'
import StatusAdmin from './views/Status-Admin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Admin',
      name: 'homeAdmin',
      component: HomeAdmin
    },
    {
      path: '/Status/View/:id',
      name: 'status',
      component: Status
    },
    {
      path: '/Status/Admin/:ad',
      name: 'statusAdmin',
      component: StatusAdmin
    }
  ]
})
