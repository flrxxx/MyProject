<template>
    <div class="barbox">
        <div class="selfbarbox">
            <div class="barfull" v-for="item in selfbar.data" >
                <div class="bardatatext" :style="{color:item.color,bottom:item.height + '%'}" :id="item.id">{{item.formatNum}}</div>
                <div class="barbox"  :title="item.formatNum">

                    <transition
                            v-on:before-enter="beforeEnter"
                            v-on:enter="enter"
                            v-bind:css="false"
                    >
                        <div  v-if="show" class="bardatabox" :data-height="item.height" :style="{backgroundColor:item.color}"></div>
                    </transition>

                </div>
            </div>
        </div>
        <div class="selfbarbottom">
            <div :class="setClass"  v-for="item in selfbar.data" :title="item.text">
                <div class="Legend" :style="{backgroundColor:item.color}"></div>
                {{item.text}}
            </div>
        </div>
    </div>
</template>

<script>
    import countup from 'countup';
    import * as baseic from '../../js/baseic';
    import Velocity from 'velocity-animate';
    export default {
        name: "selfbar",
        props:['selfbar'],
        data(){
            return {
                number:0,
                endnum:10000,
                selfbardata:[],
                length:this.selfbar.data.length,
                show:false
            }
        },
        methods:{
            beforeEnter: function (el) {
                el.style.height = 0
            },
            enter:function(el,done){
                Velocity(el, { height:el.getAttribute('data-height')+ '%',}, { duration: 1500 })
            }
        },
        computed:{
            setClass: function(){
                return 'BarLegendBox BarLegendBox'+this.length;
            }
        },
        created(){
            var number=function(data){
                if(data!=null){
                    return data.toString().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
                }else{
                    return ;
                }
            }
            this.selfbardata = this.selfbar.data;
            for(let i=0; i<this.selfbardata.length;i++){
                this.selfbardata[i].formatNum = number(this.selfbardata[i].num);
                this.selfbardata[i].height = (this.selfbardata[i].num / this.selfbardata[i].total * 100) > 100 ? 100 :(this.selfbardata[i].num / this.selfbardata[i].total * 100);
                this.selfbardata[i].id = 'bardatatext'+ baseic.NewID(10);
            }
        },
        mounted(){
            this.show= true;
            for(let i = 0; i<this.selfbardata.length;i++){
                var demo = new countup(this.selfbardata[i].id, 0, this.selfbardata[i].num, 0, 1.5);
                demo.start();
            }

        }
    }
</script>

<style  lang="less">
    .barbox{
        .selfbarbox{
            padding: 30px 0 20px;
            text-align: center;
            .barfull{
                display: inline-block;
                padding: 0px 10%;
                width: 10%;
                position: relative;
            }
            .bardatatext{
                font-size: 18px;
                font-weight: bold;
                height: 32px;
                line-height: 32px;
                text-align: center;
                position: absolute;
                z-index: 1;
                left: 0px;
                right: 0px;
            }
            .barbox{
                height: 200px;
                background-color: #f7f7f7;
                max-width: 60px;
                width: 100%;
                border-radius: 30px;
                display: block;
                margin: 0 auto;
                line-height: 0;
                overflow: hidden;
                position: relative;
                .bardatatext,.bardatabox{
                    position: absolute;
                    bottom:0px;
                    left: 0px;
                }

                .bardatabox{
                    max-height: 100%;
                    width: 100%;
                    border-radius: 30px;
                }
            }
        }
        .selfbarbottom{
            display: block;
            text-align: center;
            .BarLegendBox{
                display: inline-block;
                padding: 0 15px;
                white-space: nowrap;
                font-size: 14px;
                color: #666;
                .Legend{
                    display: inline-block;
                    vertical-align: bottom;
                    width: 20px;
                    height: 20px;
                    border-radius: 4px;
                    margin-right: 10px;
                }
                .LegendText{
                    display: inline-block;
                    font-size: 14px;
                    vertical-align: middle;
                    color: #666;
                }
            }
        }
    }



</style>