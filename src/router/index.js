import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
import Home from '@/pages/Home';

Vue.use(Router);

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello,
//     },
//   ],
// });

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/sponser',
  //   name: 'Sponser',
  //   component: Sponser,
  // },
  // {
  //   path: '/academic',
  //   name: 'Academic',
  //   component: Academic,
  // },
  // {
  //   path: '/artproject_bien',
  //   name: 'artproject_bien',
  //   component: ArtprojectBien,
  // },
  // {
  //   path: '/artproject_Xing',
  //   name: 'artproject_Xing',
  //   component: ArtprojectXing,
  // },
  // {
  //   path: '/Q&A',
  //   name: 'Q&A',
  //   component: Qa,
  // },
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
