<template>
    <div class="nav">
        <router-link v-for="item in items"  tag="a" class="navitem" :to="{path:item.path}" v-on:click="addactive">
            <i class="icon"><img v-bind:src="item.icon"> </i>
            <font>{{item.text}}</font>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "headnav",
        props: ['items'],
        methods:{
            addactive:function(){
                console.log(this);
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../less/nav.less';
</style>