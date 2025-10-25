import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../pages/Landing.vue'
import Login from '../pages/Auth/Login.vue'
import Signup from '../pages/Auth/Signup.vue'
import DashboardLayout from '../pages/Dashboard/Layout.vue'
import Overview from '../pages/Dashboard/Overview.vue'
import Tickets from '../pages/Dashboard/Tickets.vue'
import { useAuth } from '../composables/useAuth'

// routes
const routes = [
  { path: '/', name: 'Landing', component: Landing },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },

  {
    path: '/dashboard',
    component: DashboardLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'Overview', component: Overview },
      { path: 'tickets', name: 'Tickets', component: Tickets },
    ],
  },

  // fallback
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// global guard: check auth
router.beforeEach((to, from, next) => {
  const auth = useAuth() // returns reactive user
  if (to.meta.requiresAuth && !auth.user.value) {
    return next({ name: 'Login' })
  }
  next()
})

export default router
