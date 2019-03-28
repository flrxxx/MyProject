<template>
    <div class="nav">
        <router-link v-for="item in items"  tag="a" class="navitem" :to="{path:item.path}" >
            <i class="icon"><img v-bind:src="item.icon"> </i>
            <font>{{item.text}}</font>
        </router-link>
        <i class="ylicon ylicon-fenlei morenav"></i>
    </div>
</template>

<script>
    export default {
        name: "headnav",
        props: ['items'],
        methods:{
        }
    }
</script>

<style scoped lang="less">
    @import '../less/nav.less';
</style>
