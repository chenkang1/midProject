<template>
    <div class="sort">
        <!-- 头部搜索 -->
        <div class="head">
            <div class="head1">
                <span class="head1-1"></span>
                <input type="text" placeholder="搜索附近的商家、商品">
            </div>
        </div>
        <!-- 中间部分 -->
        <div class="midd">
            <div class="midd1">
                <ul class="menu" @click="getproducts()">
                    <li class="lii" @click="change" v-for="product in menuslists" :key="product.id">
                        {{product.text}}
                    </li>
                </ul>
            </div>
            <!-- 左边展示栏 -->
            <div class="midd2">
                <div>
                    <div class="midd2-1"></div>
                    <div class="midd2-2" v-for="product in productlists" :key="product.id">
                        <img class="right1" :src="product.img" alt="">
                        <div class="right2">{{product.title}}</div>
                    </div>
                </div>
                <!-- 右边商品详情 -->
                <div class="midda">
                    <div class="midd2-1"></div>
                    <div class="midd2-2" v-for="product in productlists" :key="product.id">
                        <img class="right1" :src="product.img" alt="">
                        <div class="right2">{{product.title}}</div>
                    </div>
                </div>  
            </div>
        </div>
        <!-- 底部 -->
        <div class="bot">
        <div class="bot1">     
            <router-link to="/index" style="text-decoration: none;">       
            <p class="bot11"></p>
            <p>首页</p>
            </router-link>
        </div>
        <div class="bot2">
            <p class="bot22"></p>
            <p style="color:#39ac69;">分类</p>
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
            <router-link to="/my" style="text-decoration: none;">      
            <p class="bot55"></p>            
            <p>我的</p>
            </router-link>
        </div>
    </div>
        
    </div>
</template>
<script>
// 引入jquery
import $ from 'jquery'
export default {
    // 初始化
    data(){
        return {
            menuslists:[],
            productlists:[]
        }
    },
    created(){
        this.getmenus()
        this.getproducts()
    },
    // 方法
    methods:{
        getmenus(){
            $.get(this.apiurl+'/sort/menus').done((result)=>{
                this.menuslists=result.data
            })
        },
        getproducts(){
            $.get(this.apiurl+'/sort/product').done((result)=>{
                this.productlists=result.data
            })
        },
        change(){
            $('.midd2-1').text($(event.target).text())
        }
    }
}
</script>
<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .sort{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .head{
        height: 44px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2)
    }
    .head1{
        height: 30px;
        width: 90%;
        background: #F4F4F4;
        color: #999999;
        border-radius: 30px;
        position: absolute;
        top:7px;
        left: 20px;
    }
    .head1-1{
        width: 44px;
        height: 44px;
        background: url(/static/pic/sort/1.png) no-repeat center -5px;
        background-size: 44px auto;
        float: left;
    }
    .head input{
        background: #F4F4F4;
        float: left;
        border: none;
        outline: none;
        text-align: left;
        line-height: 31px;
    }
    .midd{
        display: flex;
        width: 100%;
    }
    .midd1{
        /* background: red; */
        position: fixed;
        top: 45px;
        left: 0;
        bottom: 50px;
        width: 90px;
        overflow: auto;
    }
    .midd2{
        /* background: blue; */
        position: fixed;
        top: 45px;
        right: 0;
        width: 78%;
        bottom: 50px;
        overflow: auto;
    }
    .menu li{
        text-align: center;
        line-height: 46px;
        width: auto;
        height: 46px;
        color: #666;
        font-size: 13px;
        border:1px solid rgba(0, 0, 0, 0.1);
        display: block;
        background-color: #f4f4f4;
    }
    .midd2{
        box-sizing: border-box;
    }
    .midd2-1{
        height: 40px;
        box-sizing: border-box;
        padding-left:20px;
        line-height: 40px;
    }
    .midd2 .midd2-2{
        list-style: none;
        width: 33%;
        float: left;
        height: 100px;
        /* background: yellow; */
    }
    .midd2 img{
        display: block;
        width: 60px;
        height: 60px;
        margin: 0 auto;
    }
    .right2{
        width: 100%;
        text-align: center;
        font-size: 12px;
        color: #7d7d7d;
    }
    .midda{
        float: left;
    }
    .lii:hover{
        background: white;
        border-left: 2px solid #47b34f;
        color: green;
    }
    /* .midd li:nth-child(1){
        background: white;
        border-left: 2px solid #47b34f;
        color: green;
    } */
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
        background: url(/static/pic/nav4.png) no-repeat center -50px;
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
        background: url(/static/pic/nav4.png) no-repeat center -453px;
        background-size: 24px 600px;
        height: 50%;
    }
    
</style>
