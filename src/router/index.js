import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Reviews from '@/components/Reviews'
import About from '@/components/About'
import Contact from '@/components/Contact'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name:'Home',
    component: Home
  },
  {
    path: '/Services',
    name: 'Services',
    component: Services
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/Reviews',
    name: 'Reviews',
    component: Reviews
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
