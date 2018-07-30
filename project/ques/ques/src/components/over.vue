<template>
    <div id="over">
        <el-card id="card">
            <div slot="header">
                <!-- 问卷结束 -->
                <img src="/static/logo.png" alt="">
                <span>随堂问卷系统</span>
            </div>
            <div id="pap">
                <!-- 中间内容 -->
                <span class="el-icon-success"></span>
                <span>本次问卷作答结束，谢谢！</span>
            </div>
            <!-- 跳转到首页 -->
            <div id="toindex">
                <router-link to="/" style="text-decoration: none;">回到首页→</router-link>
            </div>
            
        </el-card>
        
    </div>
</template>

<script>
export default {

}
</script>

<style>
    #card{
        width: 35%;
        margin: 50px auto;
    }
    #pap{
        color: rgba(64, 158, 255, 1);
        font-size: 25px;
        text-align: center;
        padding: 20px 0;
    }
    #toindex{
        text-decoration: none;
        float: right;
        padding-bottom: 20px;
    }
</style>
