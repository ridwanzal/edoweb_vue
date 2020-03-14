import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue';
import './assets/css/style.css';
import 'animate.css/animate.css'
import 'jquery/dist/jquery.min.js'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import VueTypedJs from 'vue-typed-js';


Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueTypedJs);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
