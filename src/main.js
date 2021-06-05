import App from './App.vue'
import Vue from 'vue'
import router from './router/index'
import vuetify from './plugins/vuetify'
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
