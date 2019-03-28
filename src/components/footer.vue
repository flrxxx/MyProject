<template>
    <div class="footer">
        <div class="footcontent">
            <div class="footlink">
                <router-link :to="footinfo.helpurl">用户使用手册</router-link>
                <router-link :to="footinfo.docurl">文档中心</router-link>
            </div>
            <div class="footinfo">© 2015-2018 XX.lancare.com 版权所有 ICP证：京B5-20180101</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "footinfo",
        props:['footinfo']
    }
</script>

<style scoped lang="less">
    @import '../less/footer.less';
</style>
<style>
    @import '../css/mediaScreen.css';
</style>