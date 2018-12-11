<!--医疗服务-->
<template>
    <div name="动态添加组件" class="tabs">
        <div class="title">动态添加组件</div>
        <div class="col-12">
            <AnimationBox >
                <div class="title" title="动态添加组件" slot="title">动态添加组件</div>
                <div slot="content">
                    <input type="text" v-model='componentName'>
                    <button @click='add'>click me to add a component</button>
                    <div>component1</div>
                    <div>component2</div>
                    <component :is="item.name" v-for="item in allComponents" :data="item.data"  class="whatareyou" style="border:1px solid #197fd3" name="dtzj"></component>
                </div>
            </AnimationBox>
        </div>
    </div>
</template>

<script>
    import component1 from '../com/component1.vue'
    import component2 from '../com/component2.vue'
    export default {
        name: "MedicalService",
        data: function() {
            return {
                allComponents: [],
                componentName: '',
                componentObject:{},
                componentData:{
                    component1:{
                        title:'我现在是组件1，自定义的数据传值',
                        text:'组件1的说明文字',
                    },
                    component2:{
                        text:"不一样的字段名",
                        bg:'#6c94f3',
                        color:"#ffffff"
                    }
                },
                data :{},

            }
        },
        components: {
            // 注册所有组件
            component1,
            component2
        },
        methods: {
            add: function() {
                if(this.componentName === ''){
                    return ;
                }else{
                    this.componentObject = {};
                    this.componentObject.name = this.componentName;
                    console.log(this.componentData[this.componentName]);
                    this.componentObject.data = this.componentData[this.componentName];
                    this.allComponents.push(this.componentObject)
                    // 重置输入框
                    this.componentName = '';
                }

            }

        }
    }
</script>

<style scoped>

</style>