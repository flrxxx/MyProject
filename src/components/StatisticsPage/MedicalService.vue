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
                    <input type="text" v-model='totalMoney'>
                    <div>{{ totalMoney | formatMoney('元')}}</div>

                    <div>{{count}}</div>
                    <input type="radio">开启
                    <div>
                        <button @click="incerment" style="width: 50px; height: 50px;">+</button>
                        <button @click="decrment" style="width: 50px; height: 50px;">-</button>
                    </div>
                    <div v-for="item in history">{{item}}</div>
                    <div>{{doneTodosCount}}</div>
                    <div>只有数组才能使用v-for {{doneTodosById.id}}{{doneTodosById.text}}</div>
                    <div v-for="item in doneTodosText">{{item.text}}</div>
                </div>
            </AnimationBox>
        </div>
    </div>
</template>

<script>
    import component1 from '../com/component1.vue'
    import component2 from '../com/component2.vue'
    import {mapState} from 'vuex'
    import {mapGetters} from 'vuex'
    export default {
        name: "MedicalService",
        data: function() {
            return {
                allComponents: [],
                componentName: '',
                totalMoney:500,
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
        computed:{

            // doneTodosCount(){
            //     return this.$store.getters.doneTodosCount
            // },
            doneTodosById(){
                console.log(typeof this.$store.getters.doneTodoById('2w'))
                return this.$store.getters.doneTodoById('2w');
            },
            ...mapGetters(['doneTodosCount','doneTodosText']),
            ...mapState(['count','history']),
        },
        filters:{       //过滤器
            formatMoney:function(value,v,t){
                if(value){
                    value = parseInt(value);
                    if(value){
                        return "￥"+value.toFixed(2) + v;
                    }

                }else{
                    console.log(value)
                }

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

            },
            incerment(){
                this.$store.dispatch('increment')
            },
            decrment(){
                this.$store.commit('decrement')
            }
        }
    }
</script>

<style scoped>

</style>