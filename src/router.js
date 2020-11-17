import Vue from 'vue';
import Router from 'vue-router';
import InitEarth from './views/InitEarth.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'initEarth',
            component: InitEarth,
        },
    ],
});
