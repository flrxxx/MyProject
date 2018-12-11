<template>
    <div>
        <div>
            <h1>{{data.title}}</h1>
            <p>{{data.text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "component1",
        props:['data'],
        created(){
            console.log(this.data.title+','+this.data.text);
        }
    }
</script>

<style scoped>

</style>