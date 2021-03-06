import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Course from '@/pages/Course';
// import Class1 from '@/pages/Class1';
import Class from '@/pages/Class';

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
    path: '/:name',
    name: 'Class',
    component: Class,
  },
];


const router = new Router({
  routes,
  mode: 'history',
  // scrollBehavior() {
  //   return window.scrollTo(0, 0);
  // },
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
