<template>
    <div>
        <p>
            {{texts}}
        </p>
        <div v-if="thischeck">我是来继承属性的</div>
        <checkboxs :checked="check" @mychange="changges"></checkboxs>
    </div>

</template>

<script>
    import checkboxs from '../sidebar/checkbox.vue';
    export default {
        name: "texts",
        props:{
            texts:{
                type:String,
                defalut:'第二个组件',
                required:true
            },
            check:{
                type:Boolean
            }
        },
        data(){
            return {
                thischeck:this.check
            }
        },
        inheritAttrs:false,
        components:{checkboxs},
        methods:{
            changges:function(data){
                this.thischeck = this.thischeck?false:true,
                console.log('check:'+this.thischeck);
                console.log(data);
            }
        }
    }

</script>

<style scoped>

</style>