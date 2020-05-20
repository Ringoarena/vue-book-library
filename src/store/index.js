import Vue from 'vue'
import Vuex from 'vuex'
import books from '@/assets/childrensbooks.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: books.books
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
