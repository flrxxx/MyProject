<template>
    <div v-show="page">
        <div>
            <h1>{{data.title}}</h1>
            <p>{{data.text}}</p>
            <button v-on:click="removeme">111</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "component1",
        props:['data'],
        data(){
            return {
                page:true,
            }
        },
        created(){
            console.log(this.data.title+','+this.data.text);
        },
        methods:{
            removeme:function(){
                this.page=false
            }
        }
    }
</script>

<style scoped>

</style>