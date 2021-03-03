npm <template>
    <div>
    <el-row>
        <el-button disabled>默认按钮</el-button>
        <el-button type="primary" disabled>主要按钮</el-button>
        <el-button type="success" disabled>成功按钮</el-button>
        <el-button type="info" disabled>信息按钮</el-button>
        <el-button type="warning" disabled>警告按钮</el-button>
        <el-button type="danger" disabled>危险按钮</el-button>
    </el-row>
    <el-radio-group v-model="radio">
        <el-radio label="a">备选项</el-radio>
        <el-radio label="b">备选项</el-radio>
    </el-radio-group>
    </div>
</template>

<script>
    export default {
        name: "path1"
    }
</script>

<style scoped>

</style>