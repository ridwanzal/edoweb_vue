import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import 'viewerjs/dist/viewer.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue';
import './assets/css/style.css';
import 'animate.css/animate.css'
import 'jquery/dist/jquery.min.js'
import 'aos/dist/aos.css'
import VueCarousel from 'vue-carousel'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import VueTypedJs from 'vue-typed-js';
import Aos from  'aos/dist/aos.js';

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueTypedJs);
Vue.use(VueCarousel);
Vue.use(Aos);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
