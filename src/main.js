import Vue from 'vue';
import App from './app.vue';
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app1 =new Vue({
    el:"#app",
    template:'<App/>',
    components:{App}
})
