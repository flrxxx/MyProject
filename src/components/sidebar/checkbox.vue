<template>
    <div>
        <label>
        <input type="checkbox" v-bind:checked="checked"  @change="$emit('mychange', $event.target.checked)">
            跨组件传值
        </label>
    </div>
</template>

<script>
    export default {
        name: "checkbox",
        model:{
            prop:'checked',
            event:'change'
        },
        props: {
            checked:{
                type: Boolean
            }
        }
    }
</script>

<style scoped>

</style>