// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'sanitize.css';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import router from './router';
import App from './App';

Vue.config.productionTip = false;

Vue.use(VueMaterial);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
