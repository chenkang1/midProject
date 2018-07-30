<template>
    <div>
        <!-- 轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="list in lunlists" :key="list.id">
                    <img :src="list.img">
                </div>
                <div class="swiper-slide"></div>
                <div class="swiper-slide"></div>
                <div class="swiper-slide"></div>
                <div class="swiper-slide"></div>
                
            </div>
            <div class="swiper-pagination abc"></div>
        </div>
        <!-- 轮播图下的横线 -->
        <div class="hr_sh"></div>
        <!-- 标题 -->
        <div class="title">【冰】百威 啤酒 500ml*9 (新旧包装，随机发货）</div>
        <div class="title1">温馨提示：如需常温请在购买时备注。酒类产品不属于14天无理由退货范畴哦~</div>
        <!-- 价格栏 -->
        <div class="price">
            <span class="price0">￥</span>
            <span class="price1">55</span>
            <span class="price2">￥69</span>
            <span class="price3">加入购物车</span>
        </div>
        <!-- 促销栏 -->
        <div class="cuxiao">
            <div class="cuxiao1">促销</div>
            <div class="cuxiao2">
                <p class="cuxiao2-1">
                    <span class="cuxiao2-1-1">秒杀</span>
                    <span class="cuxiao2-1-2">限时抢购,限购5件</span>
                </p>
                <p class="cuxiao2-2">
                    <span class="cuxiao2-2-1">满折</span>
                    <span class="cuxiao2-2-2">多买促销满1件打9.5折</span>
                    <span class="cuxiao2-2-3"></span>
                </p>
            </div>
        </div>
        <!-- 空格 -->
        <div class="hr_sh1"></div>
        <!-- 店铺地址 -->
        <div class="add">
            <div class="add1">
                <div class="add1-1">
                    <span class="add1-1-1"></span>
                    <span class="add1-1-2">沃尔玛-新街口店</span>
                </div>
                <div class="add1-2">
                    <span class="add1-2-1"></span>
                    <span class="add1-2-2">联系商家</span>
                </div>
            </div>
            <div class="add2">
                <span class="add2-1">商品评论</span>
                <span class="add2-2">暂无评论</span>
            </div>
        </div>
        <!-- 查看图文详情 -->
        <div class="ptxq">
            <router-link style="text-decoration:none;" to="/more">
                <span class="fontColor">查看图文详情
                    <span class="fontColor1">></span>
                </span>
            </router-link>
        </div>
        <!-- 底部 -->
        <div class="botto">
            <div class="botto1"></div>
            <div class="botto2">购物车是空的</div>
            <div class="botto3">去结算</div>
        </div>
        
    </div>
</template>
<script>
import $ from "jquery";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
    // 初始化数据
    data(){
        return {
            lunlists:[]
        }
    },
    // 获取数据
    created(){
        this.getlun()
    },
    mounted(){
         var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                return current + ' / ' + total;
                } 
            },
        })  
    },
    // 方法
    methods:{
        getlun(){
            $.get(this.apiurl+'/bear/lunbo').done((result)=>{
                this.lunlists=result.data
            })
        }
    }
};
</script>
<style scoped>
    /* 轮播样式 */
    .abc{
        background: #999;
        color: white;
        border-radius: 20px;
        width: 50px;
        float: left;
        margin-left: 85%;
    }
    .swiper-container {
        width: 100%;
    }  
    .swiper-slide img{
        width: 100%;
    }
    /* 轮播下的样式 */
    .hr_sh{
        width: 100%;
        height: 8px;
        overflow: hidden;
        background: -webkit-linear-gradient(left,#ffffff 0%,#d4d3d3 49%,#d4d3d3 50%,#ffffff 100%);
        box-shadow: inset 0px 8px 5px rgba(255,255,255,0.8);
    }
    .title{
        text-align: center;
        font-size: 16px;
        box-sizing: border-box;
        padding: 10px 20px;
    }
    .title1{
        text-align: center;
        color: #999999;
        font-size: 13px;
        box-sizing: border-box;
        padding: 10px 20px;
    }
    /* 底部样式 */
    .botto{
        height: 50px;
        background: #fff;
        border-top: 1px solid #d9d9d9;
        position: fixed;
        bottom: -2px;
        left: 0;
        right: 0;
        display: flex;
    }
    .botto1{
        background: url(/static/pic/cart.png) no-repeat 0px 0px;
        width: 20%;
        height: 58px;
        text-align: center;
        background-size: 50px 125px;
        margin-left: 10px;
        margin-top: 5px;
    }
    .botto2{
        font-size: 15px;
        color: #999;
        line-height: 48px;
        width: 50%;
    }
    .botto3{
        height: 51px;
        width: 30%;
        background-color: #bebebe;
        float: right;
        margin-right: 0px;
        text-align: center;
        line-height: 51px;
        color: white;
    }
    .price{
        box-sizing: border-box;
        padding: 20px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1)
    }
    .price0{
        color: #ff3434;
        margin-left: 10px;
    }
    .price1{
        font-size: 30px;
        color: #ff3434;
        margin-right: 5px;
    }
    .price2{
        font-size: 14px;
        color: #acacac;
        text-decoration: line-through;
    }
    .price3{
        background: #47b34f;
        color: white;
        font-size: 13px;
        height: 33px;
        line-height: 33px;
        float: right;
        margin-right: 10px;
        box-sizing: border-box;
        padding: 0px 10px;
        
    }
    .cuxiao{
        display: flex;
        height: 80px;
        font-size: 12px;
    }
    .cuxiao1{
        width: 20%;
        text-align: center;
        color: #999999;
        margin-top: 10px
    }
    .cuxiao2-1-1,.cuxiao2-2-1{
        background: #FF5959;
        border-radius: 2px;
        color: #ffffff;
        box-sizing: border-box;
        padding: 0 2px;
    }
    .cuxiao2-2-1{
        background: #72bb00;
    }
    .cuxiao2-2-3{
        position: absolute;
        right: 0;
        bottom: 75px;
        background: url(/static/pic/bear/good_Detail_Icon.png) no-repeat -140px 0px;
        width: 20px;
        height: 20px;
        background-size: 200px 150px;
    }
    .hr_sh1{
        width: 100%;
        height: 10px;
        background: #f4f4f4;
    }
    /* 店铺地址 */
    .add{
        box-sizing: border-box;
    }
    .add1{
        display: flex;
        font-size: 13px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        
    }
    .add1-1{
        width: 70%;
        text-align: left;
        line-height: 50px;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
    }
    .add1-1-1{
        float: left;
        margin-top: 12px;
        margin-left: 5px;
        width: 20px;
        height: 20px;
        background: url(/static/pic/bear/good_Detail_Icon.png) no-repeat -44px 4px;
        background-size: 200px 150px;
    }
    .add1-2{
        width: 30%;
        text-align: right;
        line-height: 50px;
    }
    .add1-2-1{
        float: left;
        margin-top: 12px;
        margin-left: 25px;
        width: 20px;
        height: 20px;
        background: url(/static/pic/bear/good_Detail_Icon.png) no-repeat -22px 4px;
        background-size: 200px 150px;
    }
    .add1-2-2{
        margin-right: 10px;
    }
    .add2{
        font-size: 13px;
        box-sizing: border-box;
        margin:10px 20px;
    }
    .add2-2{
        float: right;
    }
    .ptxq{
        height: 150px;
        background-color: #F2F2F2;
    }
    .fontColor{
        display: block;
        margin-top: 20px;
        color: #333333;
        font-size: 13px;
        text-align: center;
        box-sizing: border-box;
        padding-top: 20px;
    }
    .fontColor1{
        display: inline-block;
        background-color: #47b34f;
        border-radius: 50%;
        color: white;
        width: 16px;
        height: 16px;
        text-align: center;
        line-height: 16px;
    }
</style>
