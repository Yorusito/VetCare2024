import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from "../public/pages/home.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../public/pages/about.component.vue')
    },
    {
      path: "/appointment",
      name: "appointment",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../appointment/pages/view-appoinments.component.vue"),
    },
    {
      path: "/create-appointment",
      name: "create-appointment",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../appointment/pages/create-appointment.component.vue"),
    },
    {
      path: "/store",
      name: "store",
      component: ()=> import('../store/pages/store.component.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../public/pages/faq.component.vue')
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../identification/pages/register.component.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../identification/pages/login.component.vue"),
    },
    {
      path: "/petprofile",
      name: "petprofile",
      component: () => import("../petprofile/pages/petprofile.component.vue"),
    },
    {
      path:"/profile",
      name: "profile",
      component: () => import("../profile/pages/profile.component.vue")
    },
    {
      path:"/map",
      name: "map",
      component: () => import("../public/pages/map.component.vue")
    },
    {
      path:"/newappointment",
      name: "newappointment",
      component: () => import("../appointment/pages/appointment.component.vue")
    }
  ]
})

export default router
