import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const notFound={
    template:'<h1>NotFound</h1>'
}

var router = new Router({
    routes:[
        {
            path:'/',
            redirect: '/login',
        },{
            path:'/login',
            name:'login',
            component:resolve => require(['../components/login.vue'],resolve),
        },
        {
            path:'*',
            component:notFound
        },
        {
            path:'/index',
            name:'index',
            component:resolve => require(['../components/index.vue'],resolve),
            children:[
                {
                    path:'/Contract',
                    name:'Contract',
                    component:resolve => require(['../components/StatisticsPage/Contract.vue'],resolve),
                    children:[{
                        path:'*',
                        component:notFound
                    }]
                },
                {
                    path:'/PublicHealth',
                    name:'PublicHealth',
                    component:resolve => require(['../components/StatisticsPage/PublicHealth.vue'],resolve),
                },
                {
                    path:'/MedicalService',
                    name:'MedicalService',
                    component:resolve => require(['../components/StatisticsPage/MedicalService.vue'],resolve),
                },
                {
                    path:'/Diagnosis',
                    name:'Diagnosis',
                    component:resolve => require(['../components/StatisticsPage/Diagnosis.vue'],resolve),
                },
                {
                    path:'/Characteristic',
                    name:'Characteristic',
                    component:resolve => require(['../components/StatisticsPage/Characteristic.vue'],resolve),
                },
                {
                    path:'/Achievements',
                    name:'Achievements',
                    component:resolve => require(['../components/StatisticsPage/Achievements.vue'],resolve),
                }
            ]
        }
    ]
})
export default router;