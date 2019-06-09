import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home.vue'
import Category from '../pages/category.vue'
import Cart from '../pages/cart.vue'
import Mine from '../pages/mine.vue'
import Login from '../pages/login.vue'
import Details from '../pages/details.vue'
import Search from '../pages/search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        flag:true,
      },
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
      meta:{
        flag:true,
      },
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta:{
        flag:false,
      },
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta:{
        flag:true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        flag:false,
      },
    },
    {
      path: '/details',
      name: 'Details',
      component: Details,
      meta:{
        flag:false,
      },
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta:{
        flag:false,
      },
    },
  ]
})
