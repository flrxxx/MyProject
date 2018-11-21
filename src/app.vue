<template>

    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>

    var childsss = {
        props:['child'],
        template:"<div style='background-color: #6f68dd; color:#000'>我是一个局部注册的组件</div>"
    }
    export default {
        name:'App',
    }
</script>

<style>
    *{
        padding:0;
        margin: 0;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    html,body{
        height: 100%;
    }
    body{
        overflow-y: auto;
    }
    img{
        width: 100%;
        display:block;
    }
</style>