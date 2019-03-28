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
                            text:'过度组件',
                            icon:require('../image/icon_2.png'),
                            path:'/Contract'
                        },{
                            text:"动态组件",
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
                        userimg:this.$store.state.user.userimg,
                        username:this.$store.state.user.username,
                        useraddress:this.$store.state.user.useraddress,
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
<style >
    .pagecontent{
        background-color: #dee6ee;
        padding: 15px 30px;
    }
    .title{
        margin-bottom: 15px;
        font-size: 24px;
        font-weight: bold;
        color:#333;
    }
</style>

