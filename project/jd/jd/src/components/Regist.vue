<template>
    <div class="all">
        <!-- 注册抬头 -->
        <div class="top">
            <router-link to="/load" style="text-decoration: none;">
            <span class="top1"></span>
            </router-link>
            <span class="top2">京东注册</span>
        </div>
        <!-- 输入手机号 -->
        <div class="phone">
            <div class="phone1">
                <span>+86</span>
                <input type="text" placeholder="请输入手机号" class="phonenum" @click="phonenum">
                <span class="phone1-1" @click="phone11"></span>
            </div>
        </div>
        <!-- 完成认证 -->
        <div class="yan">
            <div class="yan1">
                <span class="yan1-1"></span>
                <span class="yan1-2" @click="reg">点击完成认证</span>
            </div>
        </div>
        <!-- 遮罩 -->
        <div class="cover">
            <div class="cover1">
                <!-- 协议抬头 -->
                <p class="cover1-1">注册协议及隐私政策</p>
                <!-- 协议滚动内容 -->
                <div class="cover1-2">
                    <p>在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，<span>请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：</span></p>
                    <p><a href="https://in.m.jd.com/help/app/register_info.html">《京东用户注册协议》</a></p>
                    <p><a href="https://in.m.jd.com/help/app/private_policy.html">《用户隐私政策》</a></p>
                    <p><a href="https://in.m.jd.com/help/app/order_sharing_info.html">《订单共享与安全》</a></p>
                    <p><span>【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容；并表明您也同意京东可以依据以上的隐私政策内容来处理您的个人信息。</span>如您对以上协议内容有任何疑问，您可随时与京东客服联系。</p>
                </div>
                <!-- 协议固定内容 -->
                <div class="cover1-4">
                    <p class="cover1-4-1"><span>点击同意即表示您已阅读并同意<a href="https://in.m.jd.com/help/app/register_info.html">《京东用户注册协议》</a>与<a href="https://in.m.jd.com/help/app/private_policy.html">《京东隐私政策》</a>并将您的订单信息共享给为完成此订单所必须的第三方合作方。关于<a href="https://in.m.jd.com/help/app/order_sharing_info.html">《订单共享与安全》</a></span></p>
                </div>
                <!-- 是否同意按钮 -->
                <div class="cover1-3">
                    <router-link to="/load" style="text-decoration: none;">  
                        <span class="cover1-3-1">不同意</span>
                    </router-link>
                    <span class="cover1-3-2" @click="argee">同意</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 引入jquery
import $ from 'jquery'

export default {
    // 方法
    methods:{
        phone11(){
            console.log($(event.target))
            $('.phone1-1').css('display','none')
            $(event.target).parent().children()[1].value ="";
        },
        phonenum(){
            $('.phone1-1').css('display','block')
        },
        argee(){
            $('.cover').css('display','none')
        },
        reg(){
            var mobile = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
            if(mobile.test($('.phonenum').val())){
                $('.yan1-2')[0].innerHTML='安全检测中';
            }else{
                alert('手机号格式错误')
            }
        }
    }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.all {
  box-sizing: border-box;
  width: 100%;
  height: 736px;
  overflow: hidden;
  background-color: #f7f7f7;
}
.top {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #bbb;
  background: #f9f9f9;
  color: #616161;
}
.top1 {
  float: left;
  background: url(/static/pic/load/iconBg.png) center -62px no-repeat;
  background-size: 100% auto;
  width: 22px;
  height: 22px;
  margin: 10px;
}
.top2 {
  color: #616161;
  float: left;
  margin-left: 30%;
  margin-top: 10px;
}
.phone1 {
  width: 90%;
  background: white;
  padding: 10px 20px;
  box-sizing: border-box;
  margin: 30px auto;
}
.phone1 input {
  border: none;
  outline: none;
}
.phone1-1{
    float: right;
    width: 22px;
    height: 22px;
    background: url(/static/pic/load/iconBg.png) center 0px no-repeat;
    background-size: 100% auto;
    display: none;
}
.yan {
  width: 90%;
  background: white;
  padding: 10px 20px;
  box-sizing: border-box;
  margin: 30px auto;
  border: 1px solid #409eff;
}
.yan1-1 {
  display: inline-block;
  background: url(/static/pic/load/init.gif) no-repeat;
  width: 22px;
  height: 22px;
  background-size: 100% auto;
}
.yan1-2 {
  margin: 0 10px;
  color: #409eff;
  font-size: 14px;
}
.cover {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  display: block;
}
.cover1 {
  width: 100%;
  background: #f8f8f8;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.cover1-1{
    text-align: center;
    line-height: 50px;
    color: #000;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid #999;
}
.cover1-3-1 {
  display: inline-block;
  width: 40%;
  border: 1px solid #d7d7d7;
  text-align: center;
  line-height: 40px;
  background: white;
  margin: 10px;
}
.cover1-3-2 {
  float: right;
  width: 40%;
  border: 1px solid #d7d7d7;
  text-align: center;
  line-height: 40px;
  background: red;
  margin: 10px;
  color: white;
}
.cover1-4 a{
    color: #E93B3D;
}
.cover1-2{
    height: 190px;
    overflow-x: hidden;
    overflow-y: scroll;
    font-size: 15px;
}
.cover1-2 span{
    color: black;
    font-weight: bold;
    text-decoration: underline;
}
</style>
