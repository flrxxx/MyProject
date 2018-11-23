<template>
    <transition name="slide-fade">
    <div class="selfbar" name="slide-fade" v-if="show">
        <slot name="title" class="title"></slot>
        <slot name="content"></slot>
        <slot name="foot"></slot>
    </div>
    </transition>
</template>

<script>
    import selfbar from './selfbar.vue';
    export default {
        name: "AnimationBox",
        data(){
            return {
                show:false
            }
        },
        mounted(){
            this.show=true;
        },
        components:{selfbar}
    }
</script>

<style scoped lang="less">
    .selfbar {
        background-color: #fff;
        border-radius: 4px;
        padding: 30px;
        .title {
            font-size: 18px;
            color: #555;
            font-weight: bold;
            margin-bottom: 0px;
        }
    }
    .slide-fade-enter-active {
        transition: all .5s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateY(60px);
        opacity: 0;
    }
</style>