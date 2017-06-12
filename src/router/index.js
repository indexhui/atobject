import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Course from '@/pages/Course';
import Class1 from '@/pages/Class1';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/course',
    name: 'Course',
    component: Course,
  },
  {
    path: '/class1',
    name: 'Class1',
    component: Class1,
  },
];


const router = new Router({
  routes,
  // scrollBehavior() {
  //   return window.scrollTo(0, 0);
  // },
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
