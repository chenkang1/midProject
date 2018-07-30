<template>
<div id="users">
    <!-- 用户管理 -->
    <el-card :body-style="{ padding: '0px' }">
        <div slot="header">
            <span>用户管理</span>
        </div>
    <el-table :data="tableData">
        <!-- 用户名 -->
        <el-table-column prop="username" label="用户名" :width="100"></el-table-column>
        <!-- 邮箱列 -->
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <!-- 手机列 -->
        <el-table-column prop="phone" label="手机"></el-table-column>
        <!-- 操作列 -->
        <el-table-column prop="" label="操作">
            <div slot-scope="{row}">
                <!-- 操作下方的按钮 -->
                <el-button-group>
                    <el-button type="default" @click="usersEdit(row)" round size="mini">编辑</el-button>
                    <el-button type="default" @click="usersDelete(row.id)" round size="mini">删除</el-button>
                    <el-button type="default" @click="usersReset(row.id)" round size="mini">重置密码</el-button>
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
        <el-form label-position="left" :model="formData" ref="formData" :rules="rules" label-width="60px">
            <!-- 用户名 -->
            <el-form-item label="用户名" prop="username">
                <el-input v-model="formData.username"></el-input>
            </el-form-item>
            <!-- 邮箱 -->
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="formData.email"></el-input>
            </el-form-item>
            <!-- 手机 -->
            <el-form-item label="手机" prop="phone">
                <el-input v-model="formData.phone"></el-input>
            </el-form-item>
        </el-form>
        <!-- 确认和取消按钮 -->
        <div slot="footer">
            <el-button type="danger" @click="dialogVisible=false">取 消</el-button>
            <el-button type="primary" @click="menusEdit">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
// 引入qs
import qs from 'qs'

export default {
    data() {
        // 自定义验证用户名是否存在
        var usernameRegx = (rule, value, callback) => {
            this.$http.get(`/users/isexist?fieldname=username&fieldvalue=${value}`).then((result) => {
                if (result.data.error == 0 || this.oldusername == value) {
                    callback()
                } else {
                    callback(new Error('用户名已存在,请重新输入'));                    
                }
            })
        }
        // 自定义验证邮箱是否存在
        var emailRegx = (rule, value, callback) => {
            this.$http.get(`/users/isexist?fieldname=email&fieldvalue=${value}`).then((result) => {
                if (result.data.error == 0 || this.oldemail == value) {
                    callback()
                } else {
                    callback(new Error('邮箱已存在,请重新输入'));                    
                }
            })
        }
        // 自定义验证手机是否存在
        var phoneRegx = (rule, value, callback) => {
            this.$http.get(`/users/isexist?fieldname=phone&fieldvalue=${value}`).then((result) => {
                if (result.data.error == 0 || this.oldphone == value) {
                    callback()
                } else {
                    callback(new Error('手机号已存在,请重新输入'));                    
                }
            })

        }
        return {
            // 验证
            rules: {
                // 用户验证
                username: [
                    {
                        validator: (rules, value, callback) => {
                            switch (true) {
                                case value.trim() === '':
                                    callback(new Error('不能为空'));
                                    break;
                                case !/^[a-zA-Z]\w{3,14}$/.test(value):
                                    callback(new Error('用户名长度为4到15位大小写字母'));
                                    break;
                                default:
                                    callback();
                            }
                        }
                    },{
                        validator: usernameRegx,
                        trigger: 'blur'
                    },
                ],
                // 邮箱验证
                email: [{
                    validator: (rules, value, callback) => {
                        switch (true) {
                            case value.trim() === '':
                                callback(new Error('不能为空'));
                                break;
                            case !/^\w+@\w+(\.(com|cn|net|org|edu)){1,2}$/g.test(value):
                                callback(new Error('邮箱格式不正确,请重新输入'));
                                break;
                            default:
                                callback();
                        }
                    }
                },{
                        validator: emailRegx,
                        trigger: 'blur'
                    },
                ],
                //手机验证
                phone: [{
                    validator: (rules, value, callback) => {
                        switch (true) {
                            case value.trim() === '':
                                callback(new Error('不能为空'));
                                break;
                            case !/^((13|18)(\d{9}))$|^(14[57]\d{8})$|^(17[07]\d{8})$|(^15[0-35-9]\d{8}$)/.test(value):
                                callback(new Error('手机号输入不正确,请重新输入'));
                                break;
                            default:
                                callback();
                        }
                    }
                },{
                        validator: phoneRegx,
                        trigger: 'blur'
                    },
                ],
            },
            // 数据初始化
            tableData: [],
            total: 0,
            pagesize: 4,
            currentpage: 1,
            dialogTitle: '',
            dialogVisible: false, //dialog弹窗默认关闭
            oldusername: '',
            oldemail: '',
            oldphone:'',
            formData: {
                username: "",
                email: "",
                phone: "",
            },
        }
    },
    // 获取数据
    created() {
        this.getUsersList()
    },
    methods: {
        // 从后台传参
        getUsersList() {
            this.$http.get(`/users/list?pagesize=${this.pagesize}&currentpage=${this.currentpage}`).then((result) => {
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
            this.formData.username = row.username
            this.formData.email = row.email
            this.formData.phone = row.phone
            // 设置老值
            this.oldemail = row.email
            this.oldphone = row.phone         
            this.oldusername = row.username
            // 设置id
            this.$set(this.formData, 'id', row.id)
        },
        //dialog确定按钮点击事件
        menusEdit() {
            this.$refs['formData'].validate((pass) => {
                if (pass) {
                    this.$http.post('/users/edit', qs.stringify(this.formData)).then((result) => {
                        if(result.error==0){
                            this.$http.get('/users/list').then((result)=>{
                                if(result.error==0){
                                    this.formData = result.data.data
                                }
                            })
                        }
                        this.dialogVisible = false //关闭dialog框
                        this.getUsersList() //重新加载
                    })
                }else{
                    this.dialogVisible = true
                }
            })

        },
        // 删除功能
        usersDelete(id) {
            this.$confirm('是否删除?', '提示', {
                type: 'warning'
            }).then(() => {
                this.$http.get(`/users/delete?id=${id}`).then((result) => {
                    this.getUsersList() //重新加载
                })
            }).catch(() => {
                console.log('no')
            })
        },
        // 重置密码
        usersReset(id) {
            this.$confirm('重置后密码为:123123 , 是否继续?', '提示', {
                type: 'warning'
            }).then(() => {
                this.$http.get(`/users/resetpassword?id=${id}`).then((result) => {
                    this.getUsersList() //重新加载
                })
            }).catch(() => {
                console.log('no')
            })
        }
    }
}
</script>

<style>
    .el-card{
        padding: 20px;
    }
</style>
