import Vue from 'vue'
import App from './App.vue'
import router from './router'
import books from './assets/childrensbooks.json'

Vue.config.productionTip = false

new Vue({
  router,
  data(){
    return {
      centralBooks: books.books
    }
  },
  render: h => h(App)
}).$mount('#app')
