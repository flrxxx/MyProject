import Vue from 'vue';
import App from './app.vue';
import router from './router/router';
import 'element-ui/lib/theme-chalk/index.css'
import {DatePicker} from 'element-ui';
import AnimationBox from './components/chart/AnimationBox.vue';

import store from './store/store.js';

Vue.component('AnimationBox',AnimationBox)
Vue.use(DatePicker);

var app =new Vue({
    router,
    store,
    el:"#app",
    template:'<App/>',
    components:{App},
    render: h => h(App)
})
