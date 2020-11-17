/* eslint no-param-reassign: "off" */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        app: null,
    },
    mutations: {
        initApp(state, payload) {
            state.app = payload.app;
        },
    },
    actions: {

    },
});
