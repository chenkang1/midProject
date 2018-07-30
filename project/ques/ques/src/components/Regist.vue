<template>
<div id="regist">
    <el-card class="card">
        <div slot="header">
            <!-- 头部图片和标题 -->            
            <img src="/static/logo.png">
            <span>注册</span>
        </div>

        <el-form ref="formLogin" :model="formLoginData" :rules="rules" label-width="80px">
            <!-- 用户名input框 -->
            <el-form-item label="用户名" prop="username">
                <el-input v-model="formLoginData.username"></el-input>
            </el-form-item>
            <!-- 密码input框 -->
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="formLoginData.password"></el-input>
            </el-form-item>
            <!-- 确认密码input框 -->
            <el-form-item label="确认密码" prop="password2">
                <el-input type="password" v-model="formLoginData.password2"></el-input>
            </el-form-item>
            <!-- 邮箱input框 -->
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="formLoginData.email"></el-input>
            </el-form-item>
            <!-- 手机input框 -->
            <el-form-item label="手机" prop="phone">
                <el-input v-model="formLoginData.phone"></el-input>
            </el-form-item>
            <el-form-item>
                <!-- 两个按钮 -->
                <el-button type="primary" @click="regist">注册</el-button>
                <router-link to="/login">
                    <el-button type="success" class="success">已有账号</el-button>
                </router-link>
            </el-form-item>
        </el-form>

    </el-card>
</div>
</template>

<script>
import qs from 'qs'

export default {
    data() {
        // 自定义验证用户名是否存在
        let validUsername = (rule, value, callback) => {
            this.$http.get(`/users/isexist?fieldname=username&fieldvalue=${value}`).then((result) => {
                if (result.data.error == 0 || this.oldusername == value) {
                    callback()
                } else {
                    callback(new Error('用户名已存在,请重新输入'));
                }
            })
        }
        // 自定义验证密码长度
        let validPassword = (rule, value, callback) => {
            let regx = /^.{6,15}$/
            if (!regx.test(value)) {
                callback(new Error('密码长度为6到15位任意组合'));
            } else {
                callback();
            }
        }
        // 自定义验证确认密码是否与密码相同
        let validPassword2 = (rule, value, callback) => {
            let regx = /^.{6,15}$/
            if (value !== this.formLoginData.password) {
                callback(new Error('两次密码不一致,请重新输入'));
            } else {
                callback();
            }
        }
        // 自定义验证邮箱格式
        let validEmail = (rule, value, callback) => {
            let regx = /^\w+@\w+(\.(com|cn|net|org|edu)){1,2}$/g
            if (!regx.test(value)) {
                callback(new Error('邮箱格式不正确,请重新输入'));
            } else {
                callback();
            }
        }
        // 自定义验证手机号格式
        let validPhone = (rule, value, callback) => {
            let regx = /^((13|18)(\d{9}))$|^(14[57]\d{8})$|^(17[07]\d{8})$|(^15[0-35-9]\d{8}$)/
            if (!regx.test(value)) {
                callback(new Error('手机号输入不正确,请重新输入'));
            } else {
                callback();
            }
        }
        return {
            // 初始化
            formLoginData: {
                username: "",
                password: "",
                password2: "",
                email: "",
                phone: ""
            },
            // 验证
            rules: {
                username: [{
                    // 验证用户名不为空和长度
                        validator: (rules, value, callback) => {
                            switch (true) {
                                case value.trim() === '':
                                    callback(new Error('用户名不能为空'));
                                    break;
                                case !/^[a-zA-Z]\w{3,14}$/.test(value):
                                    callback(new Error('用户名长度为4到15位大小写字母'));
                                    break;
                                default:
                                    callback();
                            }
                        }
                    },
                    {
                        validator: validUsername,
                        trigger: "blur"     //失去焦点触发
                    }
                ],
                password: [
                    {
                        // 验证密码不为空
                        validator: (rules, value, callback) => {
                            switch (true) {
                                case value.trim() === '':
                                    callback(new Error('密码不能为空'));
                                    break;
                                default:
                                    callback();
                            }
                        }
                    },
                    {
                    validator: validPassword,
                    trigger: "blur"     //失去焦点触发
                }],
                password2: [
                    {
                        // 验证密码不为空
                        validator: (rules, value, callback) => {
                            switch (true) {
                                case value.trim() === '':
                                    callback(new Error('确认密码不能为空'));
                                    break;
                                default:
                                    callback();
                            }
                        }
                    },
                    {
                    validator: validPassword2,
                    trigger: "change"
                }],
                email: [
                    {
                        // 验证邮箱不为空
                        validator: (rules, value, callback) => {
                            switch (true) {
                                case value.trim() === '':
                                    callback(new Error('邮箱不能为空'));
                                    break;
                                default:
                                    callback();
                            }
                        }
                    },
                    {
                    validator: validEmail,
                    trigger: "change"
                }],
                phone: [
                    {
                        // 验证手机不为空
                        validator: (rules, value, callback) => {
                            switch (true) {
                                case value.trim() === '':
                                    callback(new Error('手机不能为空'));
                                    break;
                                default:
                                    callback();
                            }
                        }
                    },
                    {
                    validator: validPhone,
                    trigger: "change"
                }],
            }
        };
    },
    created() {
        //this.getUsersList()
    },
    methods: {
        // 注册按钮触发的事件
        regist() {
                // 判断验证是否通过
            this.$refs.formLogin.validate((valid) => {
                if (!valid) {
                    return
                }
                // 添加 , 跳转
                this.$http.post('/users/add', qs.stringify(this.formLoginData)).then((result) => {
                    this.$router.push('/login')
                    console.log(result.data)
                })

            })
        },
        getUsersList() {
            this.$http.get('/users/list').then((result) => {
                console.log(result.data.data)
            })
        }
    }
};
</script>

<style scoped>
.card {
    margin: 100px auto;
    width: 400px;
}

.success {
    margin-left: 70px;
}
</style>
