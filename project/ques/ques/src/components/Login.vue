<template>
    <div id="login">
        <el-card class="card">
            <div slot="header">
                <!-- 头部图片和标题 -->
                <img src="/static/logo.png">                
                <span>登录</span>
            </div>
        
        <el-form :model="formLoginData" ref="form" label-width="80px" :rules="rules">
            <!-- 用户名和密码input框 -->
            <el-form-item label="用户名" prop="username">
                <el-input v-model="formLoginData.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="formLoginData.password"></el-input>
            </el-form-item>
            <el-form-item>
                <!-- 登录注册按钮 -->
                <el-button type="primary" @click="login">登录</el-button>
                <router-link to="/regist">
                    <el-button type="success" class="success">注册</el-button>
                </router-link>
            </el-form-item>
        </el-form>
        </el-card>

    </div>
</template>

<script>
export default {
    data(){
        return {
            // 初始化
            formLoginData:{
                username:'',
                password:'',
            },
            // 验证不能为空
            rules:{
                // 用户名
                username:{
                    required: true, message: '用户名必须填写', trigger: 'blur'
                },
                // 密码
                password:{
                    required: true, message: '密码必须填写', trigger: 'blur'
                }
            }
        }
    },
    // 方法
    methods:{
        login(){
            this.$http.post('/users/login',this.$qs.stringify(this.formLoginData)).then((result)=>{
                if(result.data.error == 0){
                        this.$router.push("/index");
                    }else{
                        this.$message.error('用户名或密码错误!');
                    }
            })
        }
    }
}
</script>

<style scoped>
    .card{
        margin: 100px auto;
        width: 400px;
    }
    .success{
        margin-left: 70px;
    }
</style>
