import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';
import "./assets/app.scss";

Vue.config.productionTip = false;

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('SiteFooter', require('./components/SiteFooter.vue').default);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
