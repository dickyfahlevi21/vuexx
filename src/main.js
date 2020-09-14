import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


Vue.config.productionTip = false

Vue.filter('currency', function (value) {
  if (!value) return ''
  let dot = value.toString();
  dot=dot.replace(/\B(?=(\d{3})+(?!\d))/g,".");
  return `Rp ${dot}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
