import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewEmployee from '../components/NewEmployee'
import EditEmployee from '../components/EditEmployee'
import ViewEmployee from '../components/ViewEmployee'
import Login from '../components/Login'
import SignUp from '@/components/SignUp'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      requiresGuest: true
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
    meta:{
      requiresGuest: true
    }
  },
  {
    path: '/about',
    name: 'about',
    meta:{
      requiresGuest: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/new',
    name: 'new-employee',
    component:NewEmployee,
    meta:{
      requiresAuth: true
    }
  },
  {
    path:'/edit/:employee_id',
    name:'edit-employee',
    component:EditEmployee,
    meta:{
      requiresAuth: true
    }
  },
  {
    path:'/:employee_id',
    name:'view-employee',
    component:ViewEmployee,
    meta:{
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})
//Navigation Guards

router.beforeEach((to,from,next)=>{
//Check For RequireAuth Guards 
if(to.matched.some(record => record.meta.requiresAuth))
{
  //Checking If User Not Logged In
  if(!firebase.auth().currentUser)
  {
    //Go To Login Page
    next({
      path:'/login',
      query:{
        redirect: to.fullPath
      }
    });
  }else
  {
    //Proceed To Route Normally
    next();
  }
}else if(to.matched.some(record => record.meta.requiresGuest))
{
  //Checking if user is Logged In 
  if(firebase.auth().currentUser)
  {
    //Go To Login Page
    next({
      path:'/',
      query:{
        redirect: to.fullPath
      }
    });
  }else
  {
    //Proceed To Route Normally
    next();
  }

}else
{
  //Proceed To Route Normally
  next();
}

})

export default router
