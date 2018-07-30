<template>
<div id="papersedit">
    <el-card>
        <!-- 问卷编辑 -->
        <div slot="header">
            <span>编辑</span>
        </div>
        <el-form :model="formData" ref="formData" label-position="left" label-width="80px">
            <!-- 标题 -->
            <el-form-item label="标题">
                <el-input v-model="formData.title"></el-input>
            </el-form-item>
            <!-- 大纲 -->
            <el-form-item label="大纲">
                <el-tree node-key="id" ref="tree" @check-change="selectNode" show-checkbox :render-after-expand="false" :data="outlinesList" :props="{children:'children',label:'text'}"></el-tree>
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
            <!-- 保存按钮 -->
            <el-form-item>
                <el-button type="primary" @click="saves()">保存</el-button>
            </el-form-item>
        </el-form>

    </el-card>
</div>
</template>

<script>
export default {
    props: ['id'],
    // 初始化
    data() {
        return {
            // paperList: {},
            itemsList: [],
            outlinesList: [],
            classesList: [],
            formData: {
                id:'',
                title: '',
                content: [],
                item_id: '',
                classes_id: '',
            }
        }
    },
    created() {
        this.getPaperList()
        this.getOutlinesList()
        this.getItemsList()
        this.getClassesList()
    },
    methods: {
        // 保存
        saves() {
            this.$http.post("/papers/edit", this.$qs.stringify({
                id:this.formData.id,
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
        // 获取数据
        getPaperList() {
            this.$http.get('/papers/one', {
                params: {
                    id: this.id
                }
            }).then(result => {
                if (result.data.error == 4) {
                    this.$router.push('/login')
                }
                // 数据回填
                result.data.data.item = JSON.parse(result.data.data.item)
                result.data.data.content = JSON.parse(result.data.data.content)
                this.formData.id = result.data.data.id
                this.formData.title = result.data.data.title
                this.formData.item_id = +result.data.data.item_id                
                this.formData.classes_id = +result.data.data.classes_id
                this.formData.content = result.data.data.content
                var keys = result.data.data.content.map(el =>{
                    return el.id
                })
                this.$refs.tree.setCheckedKeys(keys)
            })
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
