import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import NetworkIssue from '../views/NetworkIssue.vue'
import NProgress from 'nprogress' // include the NProgress library

Vue.use(VueRouter)

const routes = [
  {
    path: '/404',
    name: '404',
    component: NotFound,
    props: true
  },
  {
    path: '/network-issue',
    name: 'NetworkIssue',
    component: NetworkIssue
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/discography',
    name: 'Discography',
    // route level code-splitting
    // this generates a separate chunk (discography.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "discography" */ '../views/Discography.vue')
  },
  {
    path: '/events',
    name: 'Events',
    // route level code-splitting
    // this generates a separate chunk (events.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "events" */ '../views/Events.vue')
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    // route level code-splitting
    // this generates a separate chunk (event.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "eventDetails" */ '../views/EventDetails.vue')
  },
  {
    path: '*', // will catch all navigation that doesn't match any of the routes above this entry in the array
    redirect: { name: '404', params: { resource: 'page' } }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  // global route guard: start the progress bar when routing begins
  NProgress.start()
  next()
})

router.afterEach(() => {
  // global route guard: finish the progress bar when routing is about to end
  NProgress.done()
})

export default router
