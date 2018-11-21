import Vue from 'vue';
import App from './app.vue';
import router from './router/router';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);


var app1 =new Vue({
    router,
    el:"#app",
    template:'<App/>',
    components:{App},
    render: h => h(App)
})
