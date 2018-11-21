<template>
    <div class="main">
        <headnav></headnav>
    </div>
</template>

<script>
    import headnav from './header.vue';
    export default {
        name: "index",
        data(){
            return {
                nav:[
                    {
                        path:'/element',
                        text:'elementUI应用'
                    },{
                        path:'/components',
                        text:'组件应用'
                    },{
                        path:'/router',
                        text:'vue-router应用'
                    }
                ]
            }
        },
        components:{headnav}
    }
</script>

