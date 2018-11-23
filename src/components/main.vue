<template>
    <div class="main">
        <headinfo :header="header"></headinfo>
        <div class="pagecontent">
            <router-view></router-view>
        </div>
        <footinfo :footinfo="footinfo"></footinfo>
    </div>
</template>

<script>
    import headinfo from './header.vue';
    import footinfo from './footer.vue';
    export default {
        name: "pagemain",
        data(){
            return {
                header:{
                    logo:{
                        logoimg:require('../image/logo.png'),
                        logotitle:'基层医疗卫生服务管理平台'
                    },
                    nav:[
                        {
                            text:'首页',
                            icon:require('../image/icon_1.png'),
                            path:'/index'
                        },{
                            text:'签约统计',
                            icon:require('../image/icon_2.png'),
                            path:'/Contract'
                        },{
                            text:"公卫统计",
                            icon:require('../image/icon_3.png'),
                            path:'/PublicHealth'
                        },{
                            text:"医疗服务统计",
                            icon:require('../image/icon_4.png'),
                            path:'/MedicalService'
                        },{
                            text:"分级诊疗统计",
                            icon:require('../image/icon_5.png'),
                            path:'/Diagnosis'
                        },{
                            text:"蓝卡特色统计",
                            icon:require('../image/icon_6.png'),
                            path:'/Characteristic'
                        },{
                            text:"绩效统计",
                            icon:require('../image/icon_7.png'),
                            path:'/Achievements'
                        }
                    ],
                    user:{
                        userimg:require('../image/user.png'),
                        username:'测试账号',
                        useraddress:'沈阳金豪研发中心沈阳金豪研发中心',
                        logouturl:'/login'
                    }
                },
                footinfo:{
                    helpurl:'/indexsss',
                    docurl:'/indexsss'
                }
            }
        },
        components:{headinfo,footinfo}
    }
</script>
<style scoped>
    .pagecontent{
        background-color: #dee6ee;
    }
</style>

