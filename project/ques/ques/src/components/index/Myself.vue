<template>
<div>
    <el-card>
        <!-- 个人中心 -->
        <div slot="header">
            <span>个人中心</span>
        </div>
        <el-form label-position="left" :model="form" ref="form" label-width="80px" :rules="rules">
            <!-- 账号 -->
            <el-form-item label="账号" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <!-- 手机 -->
            <el-form-item label="手机" prop="phone">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <!-- 邮箱 -->
            <el-form-item label="邮箱"  prop="email">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <!-- 修改并保存 -->
            <el-form-item>
                <el-button type="primary" @click="save()">修改并保存</el-button>
            </el-form-item>
        </el-form>
    </el-card>

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
            form: {
                username: '',
                phone: '',
                email: '',
                oldusername: '',
                oldemail: '',
                oldphone:'',
            },

        }
    },
    created() {
        this.getform()
    },
    methods: {
        // 保存
        save() {
            this.$http.post('/users/edit', qs.stringify(this.form)).then((result) => {
                if (result.error == 0) {
                    this.$http.get('/users/list').then((result) => {
                        if (result.error == 0) {
                            console.log(this.form)
                            this.form = result.data.data
                        }
                    })
                }
                // 修改后的弹框
                this.$message({
                    message: '修改成功!!!',
                    type: 'success'
                })
                this.getform() //重新加载
            })
        },
        // 获取数据
        getform() {
            this.$http.get('/users/one').then(result => {
                this.form.username = result.data.data.username
                this.form.phone = result.data.data.phone
                this.form.email = result.data.data.email
                // 设置老值
                this.oldemail = result.data.data.email
                this.oldphone = result.data.data.phone         
                this.oldusername = result.data.data.username
                this.$set(this.form, 'id', result.data.data.id)

            })
        }
    }
}
</script>

<style>

</style>
