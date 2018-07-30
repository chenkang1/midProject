<template>
    <div class="all">
        <!-- 京东登录 -->
        <div class="top">
            <router-link to="/my" style="text-decoration: none;">
            <span class="top1"></span>
            </router-link>
            <span class="top2">京东登录</span>
        </div>
        <!-- 用户登录 -->
        <div class="user">
            <span class="user1" @click="change1">账号密码登录</span>
            <span class="user2" @click="change">短信验证码登录</span>
        </div>
        <!-- 账号,密码 -->
        <div class="accout">
            <p class="accout1">
                <span class="accout1-1">账号</span>
                <input type="text" placeholder="用户名/邮箱/已验证手机" @click="phonenum" class="phonenum" @input="btncolor">
                <span class="phone1-1" @click="phone11"></span>
            </p>
            <p class="accout2">
                <span class="accout2-1">密码</span>
                <input type="password" placeholder="请输入密码" @click="phonenum22" class="phonenum22" @input="btncolor">
                <span class="eyes" @click="eyes"></span>
                
                <span class="phone1-122" @click="phone1122"></span>
            </p>
        </div>
        <!-- 短信验证登录 -->
        <div class="yan">
            <p class="yan1">
                <span class="yan1-1">+86</span>
                <input type="text" placeholder="请输入手机号"  @click="passwordnum2">
                <span class="password1-12" @click="password112"></span>
                
                <span class="yan1-3">获取验证码</span>
            </p>
            <p class="yan2">
                <!-- <span>密码</span> -->
                <input type="password" placeholder="请输入收到的验证码" @click="passwordnum">
                <span class="password1-1" @click="password11"></span>
            </p>
        </div>
        <!-- 登录按钮 -->
        <div class="bott">登 录</div>
        <div class="bott1">一键登录</div>
        <!-- 忘记密码 -->
        <div class="forget">
            <div class="forget1">
                <span class="forget1-1"></span>
                <span class="forget1-2">忘记密码</span>
            </div>
            <div class="forget2">
                <router-link to="/regist" style="text-decoration: none;">     
                    <span class="forget2-1"></span>
                    <span class="forget2-2">手机快速注册</span>
                </router-link>
            </div>
        </div>
        <!-- 换其他方式登录 -->
        <div>
            <span class="line"></span>
            <span class="line1">其他方式登录</span>
        </div>
        <!-- 登录方式 -->
        <div class="dlu">
            <!-- qq微信图标 -->
            <div class="dlu1">
                <span class="dlu1-1"></span>
                <span class="dlu1-2"></span>
            </div>
        </div>
        <!-- 京东隐私政策 -->
         <div class="ysi">
            <span>登录即代表您已同意</span>
            <a class="ysi2" href="//in.m.jd.com/help/app/private_policy.html">京东隐私政策</a>
        </div>
        
    </div>
</template>
<script>
// 引入jquery
import $ from 'jquery'

export default {
    methods:{
        // 点击眼睛显示或者隐藏密码
        eyes(){
            $('.eyes').toggleClass('eyes1')
            if($('.phonenum22')[0].type=='password'){
                $('.phonenum22').attr('type','text')
            }
            else{
                $('.phonenum22').attr('type','password')
            }
            
        },
        // 账户登录
        change(){
            $('.accout').css('display','none')
            $('.yan').css('display','block') 
            $('.user2').css({
                "border-bottom":"2px solid red"
            }) 
            $('.user1').css({
                "border-bottom":"none"
            }) 
            
        },
        // 短信验证登录
        change1(){
            $('.accout').css('display','block')
            $('.yan').css('display','none') 
            $('.user1').css({
                "border-bottom":"2px solid red"
            }) 
            $('.user2').css({
                "border-bottom":"none"
            })
        },
        // 账号里面点击×图标效果
        phone11(){
            $('.phone1-1').css('display','none')
            $(event.target).parent().children()[1].value ="";
            $(".bott").removeClass("red-btn");
            
        },
        // 账号中密码里面点击×图标效果
        password11(){
            $('.password1-1').css('display','none')
            $(event.target).parent().children()[0].value ="";
        },
        // 密码里面点击×图标效果
        password112(){
            $('.password1-12').css('display','none')
            $(event.target).parent().children()[1].value ="";
        },
        // 密码里面账号的点击x效果
        passwordnum2(){
            $('.password1-12').css('display','block')
        },
        passwordnum(){
            $('.password1-1').css('display','block')
        },
        phonenum(){
            $('.phone1-1').css('display','block')
        },
        phone1122(){
            $('.phone1-122').css('display','none')
            $(event.target).parent().children()[1].value ="";
            $(".bott").removeClass("red-btn");                        
        },
        phonenum22(){
            $('.phone1-122').css('display','block')
        },
        // 登录按钮
        btncolor(){
            if ($(".phonenum").val() != "" && $(".phonenum22").val() != "") {
                $(".bott").addClass("red-btn");
            } else {
                $(".bott").removeClass("red-btn");
            }
        }
    }
}
</script>
<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .all{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .top{
        height: 45px;
        background: #f9f9f9;
        line-height: 45px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1)
    }
    .top1{
        width: 22px;
        height: 22px;
        background: url(/static/pic/load/iconBg.png) no-repeat 0px -62px;
        background-size: 100% auto;
        float: left;
        margin-top: 10px;
        margin-left: 10px;
    }
    .red-btn {
        background-color: #f23030;
        color: #fff;
    }
    .top2{
        display: inline-block;
        color: #616161;
        font-size: 17px;
        margin-left: 35%;
    }
    .user{
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        display: inline-block;
        width: 100%;
    }
    .user1{
        border-bottom: 2px solid red;
    }
    .user22{
        border-bottom: 2px solid red;
    }
    .user span{
        box-sizing: border-box;
        padding: 16px 10px;
        text-align: center;
        line-height: 50px;
        font-size: 13px;
        margin-left: 65px;
        color: #333;
    }
    .accout{
        box-sizing: border-box;
    }
    .accout1-1,.accout2-1{
        float: left;
        padding-right: 40px;
    }
    .accout p{
        float: left;
        height: 50px;
        margin-left: 5%;
        width: 90%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        text-align: center;
        line-height: 50px;  
    }
    .accout input{
        border:none;
        outline: none;
    }
    .yan{
        box-sizing: border-box;
        display: none;
    }
    .yan p{
        text-align: left;
        height: 50px;
        width: 90%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        line-height: 50px;
        margin-left: 5%;
    }
    .yan input{
        border: none;
        outline: none;
    }
    .yan1{
        display: flex;
    }
    .yan1 input{
        width:60%;
        margin-left: 5px;
    }
    .yan1-3{
        width: 30%;
        float: right;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    /* 登录按钮 */
    .bott{
        height: 45px;
        width: 90%;
        background: #eee;
        color: #848689;
        float: left;
        text-align: center;
        line-height: 45px;
        margin-left: 5%;
        margin-top: 30px;
        display: block;
    }
    .red-btn {
        background: #f23030;
        color: #fff;
    }
    .bott1{
        height: 45px;
        width: 90%;
        color: #848689;
        float: left;
        text-align: center;
        line-height: 45px;
        margin-left: 5%;
        margin-top: 10px;
        border: 1px solid #f23030;
        color: #f23030
    }
    .forget1{
        float: left;
        font-size: 10px;
        margin-top: 20px;
        margin-left: 20px;
    }
    .forget1-1{
        display: inline-block;
        width: 22px;
        height: 22px;
        background: url(/static/pic/load/iconBg.png) center -21px no-repeat;
        background-size: 100% auto;
    }
    .forget2{
        float: right;
        font-size: 10px;
        margin-top: 20px;
        margin-right: 20px;
    }
    .forget2-1{
        display: inline-block;
        width: 22px;
        height: 22px;
        background: url(/static/pic/load/iconBg.png) center -41px no-repeat;
        background-size: 100% auto;
    }
    .line{
        border: 0.5px solid #bfbfbf;
        width:300px;
        text-align: center;
        line-height: 1px;
        writing-mode: vertical-lr;
        margin-left: 50px;
        margin-top: 100px;
    }
    .line1{
        display: block;
        width: 112px;
        background: white;
        position: relative;
        left:37%;
        top:-15px;
        text-align: center;
        font-weight: bold;
        color:#bfbfbf;
        font-size: 15px;
    }
    .dlu{
        width:30%;
        margin: 10px auto;
    }
    .dlu1-1{
        float: left;
        width: 22px;
        height: 22px;
        background: url(/static/pic/load/iconBg.png) center -128px no-repeat;
        background-size: 100% auto;
    }
    .dlu1-2{
        float: right;
        width: 22px;
        height: 22px;
        background: url(/static/pic/load/iconBg.png) center -155px no-repeat;
        background-size: 100% auto;
    }
    .ysi{
        float: left;
        font-size: 15px;
        color: #333;
        margin-top: 20px;
        margin-left: 25%;
    }
    .ysi2{
        color: #333;
    }
    .phone1-1{
        float: right;
        width: 22px;
        height: 22px;
        background: url(/static/pic/load/iconBg.png) center 0px no-repeat;
        background-size: 100% auto;
        margin-top: 12px;
        display: none;
    }
    .password1-1{
        float: right;
        width: 22px;
        height: 22px;
        background: url(/static/pic/load/iconBg.png) center 0px no-repeat;
        background-size: 100% auto;
        margin-top: 12px;
        display: none;
    }
    .password1-12{
        float: right;
        width: 22px;
        height: 22px;
        background: url(/static/pic/load/iconBg.png) center 0px no-repeat;
        background-size: 100% auto;
        margin-top: 12px;
        display: none;
    }
    .eyes{
        float: right;
        width: 30px;
        height: 18px;
        background: url(/static/pic/load/hide_password.png) no-repeat;
        background-size: 100% auto;
        margin-top: 12px;
    }
    .eyes1{
        float: right;
        width: 30px;
        height: 18px;
        background: url(/static/pic/load/show_password.png) no-repeat;
        background-size: 100% auto;
        margin-top: 12px;
    }
    .phone1-122{
        float: right;
        width: 22px;
        height: 22px;
        background: url(/static/pic/load/iconBg.png) center 0px no-repeat;
        background-size: 100% auto;
        margin-top: 12px;
        display: none;
        margin-right: 10px;
    }
    
    .phonenum,.phonenum22{
        float: left;
        margin-top: 15px;
    }
</style>
