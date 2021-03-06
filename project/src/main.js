// The Vue build version to load with the `import` command
// (runtime-only or standalone); has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// import '../static/css/common.css';
// import router from './router'

Vue.config.debug = true;
Vue.use(Element);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  render: h => h(App)
});
