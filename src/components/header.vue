<template>
    <div class="header">
        <div class="logo">
            <div class="logo-img"><img :src="header.logo.logoimg"> </div>
            <div class="logo-title">{{header.logo.logotitle}}</div>
        </div>
        <headnav
                :items="header.nav"
        >
        </headnav>
        <div class="userinfo">
            <div class="userimg"><img :src="header.user.userimg"></div>
            <div class="userinfobox">
                <div class="username" :title="header.user.username">{{header.user.username}}</div>
                <div class="useraddress" :title="header.user.useraddress">{{header.user.useraddress}}</div>
            </div>
            <a href="javascript:void(0)" class="logout" @click="loginout">
                <img src="../image/logout.png">
            </a>
        </div>
    </div>
</template>

<script>
    import headnav from './nav.vue';
    import * as login from '../system/login';
    export default {
        name: "headerinfo",
        props:['header'],
        components:{headnav},
        methods:{
            loginout:function(){
               login.loginout();
               this.$message({
                   message:"退出成功",
                   type:'success'
               })
               this.$router.push('/login');
            },
        }
    }
</script>

<style scoped lang="less">
    @import '../less/header.less';
</style>