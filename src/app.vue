<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name:'App',
    }
</script>

<style lang="less">
    @import './less/fonticon.less';
    body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {
        margin: 0;
        padding: 0;
    }
    *{
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
    a{
        color: #000;
        text-decoration: none;
    }
    ul,li{
        list-style: none;
    }
</style>