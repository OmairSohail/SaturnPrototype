import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewEmployee from '../components/NewEmployee'
import EditEmployee from '../components/EditEmployee'
import ViewEmployee from '../components/ViewEmployee'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/new',
    name: 'new-employee',
    component:NewEmployee
  },
  {
    path:'/edit/:employee_id',
    name:'edit-employee',
    component:EditEmployee
  },
  {
    path:'/:employee_id',
    name:'view-employee',
    component:ViewEmployee
  }
]

const router = new VueRouter({
  routes
})

export default router
