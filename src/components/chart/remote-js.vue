<template>
    <romote-js :src="jsUrl" @load-js-finish="this.jsLoadCallBack"></romote-js>
</template>

<script>
    export default {
        name: "remote-js",
        components:{
            'romote-js':{
                render(createElement){
                    var self = this;
                    return createElement('script',{
                        attrs: { type: 'text/javascript', src: this.src },
                        on:{
                            load:function(){
                                self.$emit('load-js-finish');
                            }
                        }
                    });
                },
                props:{
                    src:String,
                    required:true
                }
            }
        },
        props:{
            jsUrl:{
                type:String,
                required:true
            },
            jsLoadCallBack: Function// 外部js加载完成回调
        }
    }
</script>

<style scoped>

</style>