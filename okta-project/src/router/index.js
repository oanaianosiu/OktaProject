import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { LoginCallback, navigationGuard } from '@okta/okta-vue'
import LoggedOutComponent from '@/components/LoggedOut'
import LoggedInComponent from '@/components/LoggedIn'
import Auth from '@okta/okta-vue'



Vue.use(Auth, {
  issuer: 'https://dev-96776781.okta.com/oauth2/default',
  client_id: '0oa7v0bmkvqE2mjzF5d7s',
  redirect_uri: 'http://localhost:8080/login/callback',
  scope: 'openid profile email app-role'
})

const routes = [
  {
    path: '/loggedOut',
    name: 'LoggedOut',
    component: LoggedOutComponent
  },
  {
    path: '/login/callback',
    component: LoginCallback
  },
  {
    path: '/',
    name: 'LoggedIn',
    component: LoggedInComponent,
    meta: {
      requiresAuth: true
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach(navigationGuard)

export default router
