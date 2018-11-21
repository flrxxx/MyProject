import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
    routes:[
        {
            path:'/',
            redirect: '/index',
        },{
            path:'/index',
            name:'index',
            component:resolve => require(['../components/index.vue'],resolve),
        }
    ]
})
export default router;