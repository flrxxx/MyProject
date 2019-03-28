<template>
    <div class="PageBody">
        <div class="title">控制台 Dasgboard</div>
        <div class="pancl-lr">
            <div class="col-4">
                <AnimationBox>
                    <div class="title" :title="mechanism.title" slot="title">{{mechanism.title}}</div>
                    <selfbar slot="content" :selfbar="mechanism"></selfbar>
                </AnimationBox>
            </div>
            <div class="col-4">
                <AnimationBox>
                    <div class="title" :title="personnel.title" slot="title">{{personnel.title}}</div>
                    <selfbar slot="content" :selfbar="personnel"></selfbar>
                </AnimationBox>
            </div>
            <div class="col-4">
                <AnimationBox>
                    <div class="title" :title="Signing.title" slot="title">{{Signing.title}}</div>
                    <selfbar slot="content" :selfbar="Signing"></selfbar>
                </AnimationBox>
            </div>
            <div class="col-12">
                <AnimationBox>
                    <div class="title" :title="Chartinfo.title" slot="title">{{Chartinfo.title}}</div>
                    <EchartLine slot="content" :ChartID="Chartinfo.ChartID" :ChartOptions="Chartinfo.ChartOptions"></EchartLine>
                    <div class="fotstxt" slot="foot">
                        <font><label>2018年签约：</label>{{Chartinfo.yeartotal}}人</font>
                        <font><label>累计签约量：</label>{{Chartinfo.alltotal}}人</font>
                    </div>
                </AnimationBox>
            </div>
        </div>
    </div>
</template>

<script>
    import selfbar from './chart/selfbar.vue';

    import EchartLine from './chart/EchartLine.vue';
    export default {
        name: "index",
        data(){
            return {
                mechanism:{
                    title:'平台医疗机构数量',
                    data:[
                        {
                            total:3000,
                            num:2300,
                            color:"#6c94f3",
                            text:"已纳入统计数量"
                        },
                        {
                            total:3550,
                            num:201,
                            color:"#4ea7e9",
                            text:"未纳入统计数量"
                        }
                    ]
                },
                personnel:{
                    title:'平台服务人员数量',
                    data:[
                        {
                            total:1000,
                            num:245,
                            color:"#f6a060",
                            text:"医生数量"
                        },
                        {
                            total:240,
                            num:189,
                            color:"#f5c243",
                            text:"护士数量"
                        },
                        {
                            total:160,
                            num:121,
                            color:"#ede25c",
                            text:"其他人员数量"
                        }
                    ]
                },
                Signing:{
                    title:'平台签约会员数量 (2018年度)',
                    data:[
                        {
                            total:100000,
                            num:1000,
                            color:"#57bf9b",
                            text:"辖区人口数"
                        },
                        {
                            total:3000000,
                            num:15000051,
                            color:"#a7db9c",
                            text:"签约人数"
                        },
                        {
                            total:350000,
                            num:150000,
                            color:"#a1daca",
                            text:"签约重点人群数"
                        }
                    ]
                },
                Chartinfo:{
                    title:'家庭医生签约服务统计',
                    yeartotal:'53,319',
                    alltotal:'86,392',
                    ChartID:'linechart',
                    ChartOptions:{
                        tooltip: {
                            trigger: 'none',
                            axisPointer: {
                                type: 'cross',
                                label:{
                                    margin:20,
                                    fontFamily:'"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif',
                                    fontSize:14,
                                    backgroundColor:'#1d84d9',
                                    shadowBlur:0
                                },
                                crossStyle:{
                                    color:'#1d84d9'
                                }
                            },

                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月'],
                            axisLabel:{
                                textStyle:{
                                    fontFamily:'"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif',
                                    fontSize:14,
                                    color:'#666',
                                },
                                margin:20,
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: '#1d84d9',
                                }
                            }
                        },

                        yAxis: {
                            type: 'value',
                            axisLabel:{
                                textStyle:{
                                    fontFamily:'"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif',
                                    fontSize:16,
                                    color:'#666',
                                }
                            }
                        },
                        grid:{
                            left: '80',   // 与容器左侧的距离
                            right: '50', // 与容器右侧的距离
                            top:'10%',
                            bottom:'10%'
                        },
                        series: [{
                            data: [{
                                value:55352,
                                label:{
                                    align: 'left',
                                }
                            },{
                                value:65454,
                            },{
                                value:80901,
                            },{
                                value:25934,
                            },{
                                value:41290,
                            },{
                                value:71330,
                            },{
                                value:91320,
                            },{
                                value:63652,
                            },{
                                value:95121,
                            },{
                                value:50000,
                            },{
                                value:42157,
                            },{
                                value:54834,
                            }],
                            type: 'line',
                            smooth: true,
                            symbolSize:10,
                            areaStyle:{
                                color:'#ddeaff'
                            },
                            itemStyle:{
                                color:"#1d84d9"
                            },
                            lineStyle:{
                                width:3
                            },
                            label: {
                                normal: {
                                    distance:10,
                                    fontFamily: '"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif',
                                    show: true,
                                    position: 'top',
                                    fontSize: 16,
                                    align: 'center',
                                    fontWeight:'bold'
                                }
                            }
                        }]
                    },
                }
            }
        },
        components:{selfbar,EchartLine}
    }
</script>
<style scoped lang="less">
    .pancl-lr{
        margin: 0 -15px;
    }
    .pancl-lr:after{
        display: block;
        clear:both;
        content:"";
    }
    .col-4{
        width: 33.33333%;
        padding:0px 15px;
        float: left;
        box-sizing: border-box;
        margin-bottom: 30px;
    }
    .col-12{
        width: 100%;
        padding:0px 15px;
        float: left;
        box-sizing: border-box;
        margin-bottom: 30px;
    }
    .fotstxt{
        font-size: 16px;
        text-align: center;
        padding-top: 25px;
        font{
            padding: 0 15px;
            label{
                color:#999;
            }
        }
    }
</style>

