import Vue from 'vue';
import VueRouter from 'vue-router';
import Services from '../views/frontend/Services.vue';
import About from '../views/frontend/About.vue';
import Home from '../views/frontend/Home.vue';
import Task from '../views/frontend/Task.vue';
import Login from '../views/backend/Login.vue';
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
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/todos',
      name: 'todos',
      component: Task,
    },
  ];
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });
  
  export default router;