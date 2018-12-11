<template>
    <div>
        <div  :style="{backgroundColor:data.bg,color:data.color}">
            {{data.text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "component2",
        props:{
            data:{
                type:Object,
                request:true,
                defalut:{
                    bg:'#fff',
                    color:"#000",
                    text:"动态组件说明2"
                }
            }
        }
    }
</script>

<style scoped>

</style>