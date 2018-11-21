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
            <router-link class="logout" :to="header.user.logouturl">
                <img src="../image/logout.png">
            </router-link>
        </div>
    </div>
</template>

<script>
    import headnav from './nav.vue';
    export default {
        name: "headerinfo",
        props:['header'],
        components:{headnav}
    }
</script>

<style scoped lang="less">
    @import '../less/header.less';
</style>