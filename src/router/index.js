import Vue from 'vue'
import VueRouter from 'vue-router'
import Books from '../views/Books.vue'
import Book from '../views/Book.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'books',
    component: Books
  },
  {
    path: '/book/:id',
    name: 'book',
    component: Book
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
