import Vue from 'vue';
import Vuex from 'vuex';
import * as mutations from './mutations';
import state from './state';
import * as getters from './getter';

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    mutations
})
export default store;