import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/frontend/About.vue';
import Home from '../views/frontend/Home.vue';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    }
  ];
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });
  
  export default router;