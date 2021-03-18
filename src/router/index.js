import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home   
  },
  
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue')
  },

  {
    path: '/contactform',
    name: 'ContactForm',
    component: () => import(/* webpackChunkName: "Form" */ '../views/ContactForm.vue')
  },

  {
    path: '/post/:id',
    name: 'DetailPage',
    component: () => import(/* webpackChunkName: "DetailPage" */ '../views/DetailPage.vue'),
    props: true,
  },

  {
    path: '/login',
    name: 'LogIn',
    component: () => import(/* webpackChunkName: "Contact" */ '../views/LogIn.vue')
  },
  {
    path: '/error',
    name: 'PageNotFound',
    component: () => import(/* webpackChunkName: "Contact" */ '../views/PageNotFound.vue')
  },
  {
    path: '/new',
    name: 'NewPostInput',
    component: () => import(/* webpackChunkName: "Form" */ '../views/NewPostInput.vue')
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
