<template>
<div id="users">
    <!-- 班级管理 -->
    <el-card :body-style="{ padding: '0px' }">
        <div slot="header">
            <span>班级管理</span>
            <!-- 添加按钮 -->
            <el-button @click="btnStatus=true;dialogVisible=true;dialogTitle='添加'" type="primary" size="mini" icon="el-icon-plus">添加班级</el-button>
        </div>
        <el-table :data="tableData">
            <!-- 班级列 -->
            <el-table-column prop="classname" label="班级"></el-table-column>
            <!-- 状态列 -->
            <el-table-column prop="status" label="状态">
                <template slot-scope="{row}">
                    <el-tag v-show="row.status==0" type="success">显示</el-tag>
                    <el-tag v-show="row.status==1" type="info">不显示</el-tag>
                    
                </template>
            </el-table-column>
            <!-- 操作列 -->
            <el-table-column prop="" label="操作">
                <div slot-scope="{row}">
                    <el-button-group>
                        <!-- 编辑和删除按钮 -->
                        <el-button type="default" @click="usersEdit(row);btnStatus=false" round size="mini">编辑</el-button>
                        <el-button type="default" @click="usersDelete(row.id)" round size="mini">删除</el-button>
                    </el-button-group>
                </div>
            </el-table-column>
        </el-table>
        <!-- element-ui的分页 -->
        <div style="margin-top:20px">
            <el-pagination :current-page.sync="currentpage" :page-size="pagesize" @current-change="getUsersList" :total="total" background layout="prev,pager,next">
            </el-pagination>
        </div>
    </el-card>
    <!-- 编辑dialog框 -->
    <el-dialog width="400px" :title="dialogTitle" :visible.sync="dialogVisible" @close="dialogClose">
        <el-form label-position="left" :model="formData" :rules="rules" ref="formData" label-width="60px">
            <!-- 班级 -->
            <el-form-item label="班级" prop="classname">
                <el-input v-model="formData.classname"></el-input>
            </el-form-item>
            <!-- 状态 -->
            <el-form-item label="状态" prop="status">
                <el-tag size="mini">不显示</el-tag>
                <el-switch v-model="formData.status" :active-value="0" :inactive-value="1"></el-switch>
                <el-tag size="mini">显示</el-tag>
                <!-- <el-radio v-model="formData.status" label="0">显示</el-radio>
                <el-radio v-model="formData.status" label="1">不显示</el-radio> -->
            </el-form-item>
        </el-form>
        <!-- 确定和取消按钮 -->
        <div slot="footer">
            <el-button type="danger" @click="dialogVisible=false">取 消</el-button>
            <el-button type="primary" @click="menusAdd" v-show="btnStatus">确 定(add)</el-button>

            <!-- 编辑确认按钮 -->
            <el-button type="primary" @click="menusEdit" v-show="!btnStatus">确 定(edit)</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
export default {
    data() {
        // 自定义验证用户名是否存在
        var classnameRegx = (rule, value, callback) => {
            this.$http.get(`/classes/isexist?fieldname=classname&fieldvalue=${value}`).then((result) => {
                if (result.data.error == 0 || this.oldclassname == value) {
                    callback()
                } else {
                    callback(new Error('用户名已存在,请重新输入'));
                }
            })
        }
        return {
            rules: {
                // 班级名验证
                classname: [{
                        validator: (rules, value, callback) => {
                            switch (true) {
                                case value.trim() === '':
                                    callback(new Error('不能为空'));
                                    break;
                                case !/^[0-9]{3,9}$/.test(value):
                                    callback(new Error('长度为3到9位数字'));
                                    break;
                                default:
                                    callback();
                            }
                        }
                    },
                    {
                        validator: classnameRegx,
                        trigger: 'blur'
                    },
                ],
                // 状态验证
                status: [{
                    validator: (rules, value, callback) => {
                        switch (true) {
                            // case value.trim() === '':
                            //         callback(new Error('不能为空'));
                            //         break;
                            // case !/^(0|1)$/.test(value):
                            //     callback(new Error('状态只能为0或1,请重新输入'));
                            //     break;
                            default: callback();
                        }
                    }
                }],
            },
            // 数据初始化
            btnStatus: true,
            tableData: [],
            total: 0,
            pagesize: 4,
            currentpage: 1,
            dialogTitle: '',
            dialogVisible: false, //dialog弹窗默认关闭
            oldclassname: '',
            formData: {
                classname: "",
                status: "",
            },
        }
    },
    created() {
        this.getUsersList()
    },
    methods: {
        // 获取数据
        getUsersList() {
            this.$http.get(`/classes/list?pagesize=${this.pagesize}&currentpage=${this.currentpage}`).then((result) => {
                this.total = result.data.total
                this.tableData = result.data.data
            })
        },
        dialogClose() {
            this.$refs.formData.resetFields() //表单重置
        },
        // 编辑功能
        usersEdit(row) {
            this.dialogVisible = true //打开dialog框
            this.dialogTitle = '编辑' //修改dialog标题
            // 数据回填
            this.formData.classname = row.classname
            this.formData.status = row.status
            
            // 设置id
            this.$set(this.formData, 'id', row.id)
            this.oldclassname = row.classname
        },
        //编辑
        menusEdit() {
            this.$refs['formData'].validate((pass) => {
                if (pass) {
                    this.$http.post('/classes/edit', this.$qs.stringify(this.formData)).then((result) => {
                        // if(result.error==0){
                        //     this.$http.get('/classes/list').then((result)=>{
                        //         if(result.error==0){
                        //             this.formData = result.data.data
                        //         }
                        //     })
                        // }
                        this.dialogVisible = false //关闭dialog框
                        this.getUsersList() //重新加载
                    })
                } else {
                    this.dialogVisible = true
                }
            })

        },
        // 添加
        menusAdd() {
            this.$refs.formData.validate((pass) => {
                if (!pass) {
                    return;
                }
                this.$http
                    .post("/classes/add", this.$qs.stringify(this.formData))
                    .then(result => {
                        // this.getMenusList();
                        this.getUsersList()
                        this.dialogVisible = false; //关闭dialog弹窗
                        // this.$root.$emit('getMenusList')
                    });
            })
        },
        // 删除功能
        usersDelete(id) {
            this.$confirm('是否删除?', '提示', {
                type: 'warning'
            }).then(() => {
                this.$http.get(`/classes/delete?id=${id}`).then((result) => {
                    this.getUsersList() //重新加载
                })
            }).catch(() => {
                console.log('no')
            })
        },
    }
}
</script>

<style>
.el-card {
    padding: 20px;
}
.el-button--primary {
    float: right;
}
</style>
