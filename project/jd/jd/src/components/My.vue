<template>
    <div class="all">
        <!-- 头部栏 -->
        <div class="top">
            <div class="top1"></div>
            <router-link to="/load" style="text-decoration: none;">
            <span class="top2">登录/注册</span>
            </router-link>
            <!-- 右侧两个小图标 -->
            <div class="top3">
                <span class="top3-1"></span>
                <span class="top3-2"></span>
            </div>
        </div>
        <!-- 我的钱包一栏 -->
        <div class="top-bot">
            <div>
                <p class="top-bot1"></p>
                <p>我的钱包</p>
            </div>
            <div>
                <p>--</p>
                <p>优惠券</p>
            </div>
            <div>
                <p>--</p>
                <p>白条</p>
            </div>
            <div>
                <p>--</p>
                <p>鲜豆</p>
            </div>
        </div>
        <!-- 中间灰色分割线 -->
        <div class="gray"></div>
        <!-- 红包图片 -->
        <div class="redb"></div>
        <!-- 我的关注一栏 -->
        <div class="mid"  v-for="list in piclists" :key="list.id">
            <div class="mid1">
                <img :src="list.img1">
                <p>我的关注</p>
            </div>
            <div class="mid2">
                <img :src="list.img2">
                <p>我的评价</p>
            </div>
            <div class="mid3">
                <img :src="list.img3">
                <p>我的地址</p>
            </div>
            <div class="mid4">
                <img :src="list.img4">
                <p>会员减运费</p>
            </div>
            <div class="mid1">
                <img :src="list.img5">
                <p>签到有惊喜</p>
            </div>
            <div class="mid2">
                <img :src="list.img6">
                <p>退款/售后</p>
            </div>
            <div class="mid3">
                <img :src="list.img7">
                <p>客服反馈</p>
            </div>
            <div class="mid4">
                <img :src="list.img8">
                <p>帮助中心</p>
            </div>
            <div class="mid1">
                <img :src="list.img9">
                <p>办公室超市</p>
            </div>
            <div class="mid2">
                <img :src="list.img10">
                <p>配送员注册</p>
            </div>
            <div class="mid3">
                <img :src="list.img11">
                <p>关于我们</p>
            </div>
            <div class="mid4"></div>
        </div>
        
<!-- 最下面的导航栏 -->
        <div class="bot">
        <div class="bot1">     
            <router-link to="/index" style="text-decoration: none;">       
            <p class="bot11"></p>
            <p>首页</p>
            </router-link>
        </div>
        <div class="bot2">
            <router-link to="/sort" style="text-decoration: none;">       
            <p class="bot22"></p>
            <p>分类</p>
            </router-link>
        </div>
        <div class="bot3">
            <router-link to="/gocar" style="text-decoration: none;">
            <p class="bot33"></p>
            <p>购物车</p>
            </router-link>
        </div>
        <div class="bot4">
            <router-link to="/order" style="text-decoration: none;">  
            <p class="bot44"></p>
            <p>订单</p>
            </router-link>
        </div>
        <div class="bot5">
            <p class="bot55"></p>            
            <p style="color:#39ac69;">我的</p>
        </div>
    </div>
    </div>
</template>

<script>
// 引入jquery
import $ from 'jquery'

export default {
    data(){
        return {
            piclists:[]
        }
    },
    created(){
        this.getpic()
    },
    
    methods:{
        getpic(){
            $.get(this.apiurl+'/my/pic').done((result)=>{
                this.piclists=result.data
            })
        }
    }
};
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
    /* 头部栏 */
    .top{
        background: url(/static/pic/my/my_bgnew1.png) no-repeat;
        width: 100%;
        height: 130px;
        background-size: cover;
        background-size: 100%;
    }
    .top1{
        background: url(/static/pic/my/bg_head_new.png) no-repeat;
        background-size: auto 61px;
        width: 61px;
        height: 61px;
        position: absolute;
        top:20px;
        left: 16px;
    }
    .top2{
        display: inline-block;
        padding: 7px 10px;
        text-align: center;
        height: 20px;
        line-height: 20px;
        color: #fff;
        background-color: #69c575;
        border-radius: 2px;
        font-size: 14px;
        margin-left: 86px;
        margin-top: 41px;
    }
    /* 右侧两个小图标 */
    .top3{
        float: right;
        height: 50px;
        margin-top: 20px;
        margin-right: 10px;
    }
    .top3-1{
        display: inline-block;
        background: url(/static/pic/my/icon_er.png) no-repeat;
        width: 22px;
        height: 22px;
        background-size: 22px;
    }
    .top3-2{
        display: inline-block;
        background: url(/static/pic/my/user_message_icon.png) no-repeat;
        width: 22px;
        height: 22px;
        background-size: 22px;
    }
    /* 我的钱包栏 */
    .top-bot{
        height: 70px;
        /* background: red; */
        display: flex;
    }
    .top-bot div{
        width: 25%;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        text-align: center;
        line-height: 30px;
        font-size: 14px;
        color: #3c3c3c;
    }
    .top-bot1{
        background: url(/static/pic/my/icon_packet.png) no-repeat;
        width: 25px;
        height: 25px;      
        background-size: 25px;  
        margin-left: 40%;
        margin-top: 5px;
    }
    .gray{
        height: 10px;
        background-color: #F2F2F2;
    }
    .redb{
        background: url(/static/pic/my/r.png) no-repeat;
        height: 85px;
        background-size:auto 85px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    /* 我的关注一栏 */
    .mid{
        /* height: 110px; */
        /* display: flex; */
        box-sizing: border-box;
        /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
    }
    .mid div{
        width: 25%;
        color: #323232;
        font-size: 13px;
        text-align: center;
        line-height: 35px;
        float: left;
        margin-top: 20px;
        /* background: red; */
    }
    .mid img{
        display: block;
        width: 47px;
        height: 47px;
        margin: 0 auto;
    }
    /* 最下面导航栏 */
    .bot{
        background: #fff;
        border: 1px solid #d9d9d9;;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        z-index: 999;
        display: flex;
    }
    .bot div{
        width: 20%;
        box-sizing: border-box;
    }
    .bot p{
        font-size:12px;
        color: #555;
        text-align: center;
    }
    .bot11{
        background: url(/static/pic/nav4.png) no-repeat center -253px;
        background-size: 24px 600px;
        height: 50%;
    }
    
    .bot22{
        background: url(/static/pic/nav4.png) no-repeat center -305px;
        background-size: 24px 600px;
        height: 50%;
    }
    
    .bot33{
        background: url(/static/pic/nav4.png) no-repeat center -355px;
        background-size: 24px 600px;
        height: 50%;
    }
    
    .bot44{
        background: url(/static/pic/nav4.png) no-repeat center -405px;
        background-size: 24px 600px;
        height: 50%;
    }
    
    .bot55{
        background: url(/static/pic/nav4.png) no-repeat center -203px;
        background-size: 24px 600px;
        height: 50%;
    }
</style>
