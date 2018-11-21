<!--签约统计-->
<template>
    <div>签约统计
        <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
        </el-date-picker>
        <router-link :to="{path:'/Contract/indexttt'}">404页面</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "qytj",
        data(){
            return {
                value1: '',
            }
        }
    }
</script>

<style scoped>

</style>