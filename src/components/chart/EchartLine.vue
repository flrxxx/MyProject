<template>
    <div class="EchartLine" :id="this.ChartID" style="width: 100%; height: 400px;"></div>
</template>

<script>
    // 引入 ECharts 主模块
    var echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/line');
    //  引入提示框和title组件
    require('echarts/lib/component/tooltip');
    //生成随机ID
    function NewID(length){
        return Number(Math.random().toString().substr(3,length) + Date.now()).toString(36);
    }
    export default {
        name: "EchartLine",
        props:{
            ChartID:{
                type:String,
                default:NewID(10),
            },
            ChartOptions:{
                type:Object,
                default:()=>{},
                required:true
            }
        },
        mounted(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById(this.ChartID));
            // 绘制图表
            myChart.setOption(this.ChartOptions);
            window.addEventListener("resize", () => { myChart.resize();});
        }
    }
</script>

<style scoped>

</style>