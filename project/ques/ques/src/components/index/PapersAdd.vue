<template>
<div id="papersadd">
    <!-- 添加问卷 -->
    <el-card>
        <div slot="header">
            <span>添加</span>
        </div>
        <!-- 内容 -->
        <el-form :rules="rules" :model="formData" ref="formData" label-position="left" label-width="80px">
            <!-- 标题 -->
            <el-form-item label="标题" prop="title">
                <el-input v-model="formData.title"></el-input>
            </el-form-item>
            <!-- 大纲 -->
            <el-form-item label="大纲">
                <el-tree @check-change="selectNode" show-checkbox :render-after-expand="false" :data="outlinesList" :props="{children:'children',label:'text'}"></el-tree>
            </el-form-item>
            <!-- 选项 -->
            <el-form-item label="选项">
                <el-select v-model="formData.item_id">
                    <el-option v-for="item in itemsList" :key="'item'+item.id" :label="item.text" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <!-- 班级 -->
            <el-form-item label="班级">
                <el-select v-model="formData.classes_id">
                    <el-option v-for="item in classesList" :key="'item'+item.id" :label="item.classname" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <!-- 保存 -->
            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
            </el-form-item>
        </el-form>
    </el-card>

</div>
</template>

<script>
export default {
    // 初始化
    data() {
        return {
            // 标题验证
            rules: {
                title: [{
                    validator: (rules, value, callback) => {
                        switch (true) {
                            case value.trim() === '':
                                callback(new Error('不能为空'));
                                break;
                            case !/^.{2,15}$/.test(value):
                                callback(new Error('标题长度为2到15位'));
                                break;
                            default:
                                callback();
                        }
                    }
                }]
            },
            itemsList: [],
            outlinesList: [],
            classesList: [],
            formData: {
                title: '',
                content: [],
                item_id: '',
                classes_id: '',
            }
        }
    },
    created() {
        this.getOutlinesList()
        this.getItemsList()
        this.getClassesList()
    },
    methods: {
        // 保存
        save() {
            this.$http.post("/papers/add", this.$qs.stringify({
                title: this.formData.title,
                classes_id: this.formData.classes_id,
                item_id:this.formData.item_id,
                content: JSON.stringify(this.formData.content),

            })).then(result => {
                this.$router.push({
                    name: 'paperslist'
                })

            });
        },
        // 大纲
        selectNode(data, isSelect) {
            if (data.children.length > 0) {
                return
            }
            if (isSelect) {
                this.formData.content.push(data)
            } else {
                var index = this.formData.content.indexOf(data)
                this.formData.content.splice(index, 1)
            }
        },
        // 班级
        getClassesList() {
            this.$http.get("/classes/list").then((result) => {
                this.classesList = result.data.data

            });
        },
        // 大纲
        getOutlinesList() {
            this.$http.get("/outlines/list").then(result => {
                this.outlinesList = this.$tree(result.data.data);

            });
        },
        // 选项
        getItemsList() {
            this.$http.get("/items/list").then(result => {
                this.itemsList = this.$tree(result.data.data);

            });
        }
    }
}
</script>

<style>

</style>
