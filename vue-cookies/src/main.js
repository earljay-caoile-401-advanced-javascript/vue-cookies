import Vue from 'vue';
import App from './App.vue';
import SmartTable from 'vuejs-smart-table';
import Fragment from 'vue-fragment';

Vue.use(Fragment.Plugin);
Vue.use(SmartTable);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
