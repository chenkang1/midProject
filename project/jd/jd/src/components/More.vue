<template>
    <div>
        <!-- 商品详情图标 -->
        <div v-for="list in qitalists" :key="list.id">
            <img :src="list.img1">
            <img :src="list.img2">
            <img :src="list.img3">
            <img :src="list.img4">
            <img :src="list.img5">
            <img :src="list.img6">
            <img :src="list.img7">
            <img :src="list.img8">
            <img :src="list.img9">
            <img :src="list.img10">
            <img :src="list.img11">
        </div>
        <!-- 底部 -->
        <div class="botto">
            <div class="botto1"></div>
            <div class="botto2">购物车是空的</div>
            <div class="botto3">去结算</div>
        </div>
        <!-- 右侧黑色导航栏 -->
        <div>
            <div class="blc1">
                <ul>
                    <router-link to="/index" style="text-decoration: none;">
                        <li class="one">首页</li>
                    </router-link>
                    <router-link to="/sort" style="text-decoration: none;">
                        <li class="two">分类</li>
                    </router-link>
                    <router-link to="/gocar" style="text-decoration: none;">                    
                        <li class="three">购物车</li>
                    </router-link>
                    <router-link to="/order" style="text-decoration: none;">                    
                        <li class="four">订单</li>
                    </router-link>
                    <router-link to="/my" style="text-decoration: none;">                    
                        <li class="five">我的</li>
                    </router-link>
                    
                </ul>
            </div>
            <div class="blc" @click="blc"></div>
        </div>
        
    </div>    
    
</template>

<script>
// 引入jquery
import $ from "jquery";

export default {
    data(){
        return {
            qitalists:[]
        }
    },
    created(){
        this.getqita()
    },
    methods:{
        getqita(){
            $.get(this.apiurl+'/more/qita').done((result)=>{
                this.qitalists=result.data
            })
        },
        blc(){
            $('.blc1').slideToggle(1000)
        },
    } 

}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    div img{
        width: 100%;
        height: 100%;
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
    /* 右侧黑色导航栏 */
    .blc{
        width: 36px;
        height: 36px;
        border: 1px solid #757575;
        border-radius: 4px 0 0 4px;
        position: fixed;
        right: 0;
        bottom: 150px;
        z-index: 999;
        background: black;
        background: rgba(0,0,0,0.8) url(/static/pic/bm1.png) 7px 7px no-repeat;
        background-size: 65px 20px;
    }
    .blc1{
            position: fixed;
            right: 0px;
            bottom: 190px;
            width: 95px;
            border: 1px solid #757575;
            background: rgba(0,0,0,0.8);
    }
    .blc1{
        box-sizing: border-box;
        display: none;
    }
    .blc1 li{
        list-style: none;
        color: white;
        box-sizing: border-box;
        border: 1px solid #757575;
        display: block;
        height:35px;
        text-align: center;
        line-height: 35px;
    }
    .one{
        background: url(/static/pic/bm.png) no-repeat 5px -50px;
        background-size: 15px 300px;
    }
    .two{
        background: url(/static/pic/bm.png) no-repeat 5px -100px;
        background-size: 15px 300px;
    }
    .three{
        background: url(/static/pic/bm.png) no-repeat 5px -150px;
        background-size: 15px 300px;
    }
    .four{
        background: url(/static/pic/bm.png) no-repeat 5px -200px;
        background-size: 15px 300px;
    }
    .five{
        background: url(/static/pic/bm.png) no-repeat 5px -250px;
        background-size: 15px 300px;
    }
</style>
