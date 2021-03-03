<template>

    <div class="sidebar" name="sidebars">
        <div class="sidebar-nav">
            <ul>
                <li
                        v-for="item in sidebar"
                        :class="['sidebarItem',{active:selected === item}]"
                        v-on:click="selected = item"
                >{{item.name}}</li>
            </ul>
        </div>
        <div class="sidebaritem">
            <div class="sidebarcontent" v-if="selected" v-html="selected.content"></div>
            <div class="sidebarcontent" v-else>
                选择右边的标签
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sidebars",
        data(){
            return {
                selected:this.sidebar[0]
            }
        },
        props: {
            sidebar: {
                type: Array,
                required: true,
                default:() => []
            }
        },
        mounted(){
            console.log("出发了吗？")
        }
    }
</script>

<style scoped lang="less">
    .sidebar{
        padding: 20px;
        &:after{
            content:"";
            display:block;
            clear:both;
        }
        .sidebar-nav{
            float: left;
            width: 180px;
            .sidebarItem{
                padding: 10px 0;
                text-align: left;
                &.active{
                    color: #1d84d9;
                }
            }
        }
        .sidebaritem{
            padding-left: 200px;
            line-height: 24px;
        }
    }
</style>