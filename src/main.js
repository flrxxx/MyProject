import Vue from 'vue';
import Vuex from 'vuex';
import App from './app.vue';
import router from './router/router';
import 'element-ui/lib/theme-chalk/index.css'
import {DatePicker} from 'element-ui';
import AnimationBox from './components/chart/AnimationBox.vue';

Vue.component('AnimationBox',AnimationBox)
Vue.use(DatePicker);
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increment:state => state.count++,
        decrment:state => state.count--
    }
})


var app =new Vue({
    router,
    store,
    el:"#app",
    template:'<App/>',
    components:{App},
    render: h => h(App)
})
