import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import "@/fontawesome/css/all.css";
import "@/assets/main.scss";

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
