import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
// 自动路由
const r = require.context('../views', false, /.vue/)
const arr = []
r.keys().forEach((key) => {
  const _keyArr = key.split('.')
  arr.push({
    path: _keyArr[1],
    name: _keyArr[1].replace('/', ''),
    component: r(key).default
  })
})
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  ...arr
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
