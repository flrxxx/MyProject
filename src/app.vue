<template>
    <div id="app">
        <ul>
            <todo-item
                    v-for="item in groceryList"
                    v-bind:todo="item"
            >
            </todo-item>

        </ul>
        <div>
            <p v-if="seen" v-on:click.prevent="dosomething">现在你看到我了</p>
        </div>
        <div id="example">
            <p>Original message: "{{ message }}"</p>
            <p>Computed reversed message: "{{ reversedMessage()}}"</p>
            <p>{{now}}</p>
            <p>{{fullNames}}</p>
            <p>{{firstName}}</p>
            <p>{{lastName}}</p>
            <button v-on:click="changname">改变name</button>
        </div>
    </div>
</template>
<script>
    export default {
        name:'app',
        methods: {
            reversedMessage: function () {
                return this.message.split('').reverse().join('')
            },
            changname:function(){
                this.fullNames ='xuzhi lei';
                console.log(this.fullName)
            }
        },
        data(){
            return {
                seen:true,
                todos: [
                    { text: '学习 JavaScript' },
                    { text: '学习 Vue' },
                    { text: '整个牛项目' }
                ],
                firstName: 'Foo',
                lastName: 'Bar',
                fullName: 'Foo Bar',
                groceryList: [
                    { id: 0, text: '蔬菜' ,jiage:0},
                    { id: 1, text: '奶酪' ,jiage:10},
                    { id: 2, text: '随便其它什么人吃的东西' ,jiage:100}
                ],
                dosomething:function(){
                    alert('点击事件');
                },

                message: 'Hello',
                now:123132
            }
        },
        computed: {
            // 计算属性的 getter
            fullNames:{
                get: function () {
                    return this.firstName + ' ' + this.lastName
                },
                // setter
                set: function (newValue) {
                    var names = newValue.split(' ')
                    this.firstName = names[0]
                    this.lastName = names[names.length - 1]
                }
            },
            nowtime: function () {
                return Date.now() + '时间'
            },

        }

    }
</script>
<style >
    .test{
        color:#020202
    }
</style>
<style lang="less">
#app{
    img{width:100px;}
}
</style>
