import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'Home',
    component:() => import ('views/home/Home')
  },
  {
    path:'/category',
    name:'Category',
    component:() => import ('views/category/Category')
  },
  {
    path:'/cart',
    name:'Cart',
    component:() => import ('views/cart/Cart')
  },
  {
    path:'/profile',
    name:'Profile',
    component:() => import ('views/profile/Profile')
  }
]

export default new Router({
  mode:'history',
  routes
})
