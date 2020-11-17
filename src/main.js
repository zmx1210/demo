import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import remote from '@/api/axios/api';
import api from '@/api/api';

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$remote = remote;
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
