<template>
    <div class="barbox">
        <div class="selfbarbox">
            <div class="barfull" v-for="item in selfbar.data" >
                <div class="bardatatext" :style="{color:item.color,bottom:item.height + '%'}">{{item.formatNum}}</div>
                <div class="barbox"  :title="item.formatNum">

                    <div class="bardatabox" :style="{backgroundColor:item.color,height:item.height + '%'}"></div>
                </div>
            </div>
        </div>
        <div class="selfbarbottom">
            <div class="BarLegendBox"  v-for="item in selfbar.data">
                <div class="Legend" :style="{backgroundColor:item.color}"></div>
                <div class="LegendText">{{item.text}}</div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "selfbar",
        props:['selfbar'],
        data(){
            return {

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
            for(let i=0; i<this.selfbar.data.length;i++){
                this.selfbar.data[i].formatNum = number(this.selfbar.data[i].num);
                this.selfbar.data[i].height = (this.selfbar.data[i].num / this.selfbar.data[i].total * 100) > 100 ? 100 :(this.selfbar.data[i].num / this.selfbar.data[i].total * 100);

            }

        }
    }
</script>

<style scoped lang="less">
    .barbox{
        .selfbarbox{
            padding: 30px 0 20px;
            text-align: center;
            .barfull{
                display: inline-block;
                padding: 0px 35px;
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
                width: 60px;
                border-radius: 30px;
                vertical-align: bottom;
                display: table-cell;
                line-height: 0;
                overflow: hidden;
                .bardatatext,.bardatabox{
                    display: inline-block;
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
                .Legend{
                    display: inline-block;
                    vertical-align: middle;
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