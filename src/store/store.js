import Vue from 'vue';
import Vuex from 'vuex';
import * as mutations from './mutations';
import state from './state';
import * as getters from './getter';
import * as actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})
export default store;