import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '/songs',
    name: 'songs'
  },
  {
    path: '/Library',
    name: 'Library'
  },
  {
    path: '/Search',
    name: 'Search'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
