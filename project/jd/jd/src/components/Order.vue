<template>
    <div>
        <!-- 头部内容 -->
        <div class="head"  v-for="list in qitalists" :key="list.id">
            <div class="head1">
                <span class="head1-1">沃尔玛-{{list.title}}店</span>
                <span class="head1-2">></span>
                <span class="head1-3">已完成</span>
            </div>
            <div class="head2">{{list.time2}}</div>
            <div class="head3">
                <img :src="list.img" alt="" class="head3-1">
                <img :src="list.img1" alt="" class="head3-1">
                <img :src="list.img2" alt="" class="head3-1">
                <div class="head3-2">
                    <p class="head3-2-1">¥{{list.num}}</p>
                    <p class="head3-2-2">共3件</p>
                    <p class="head3-2-3">达达专送</p>
                    <p class="head3-2-4">再次购买</p>
                </div>
            </div>
            <div class="head4"></div>
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
            <p class="bot44"></p>
            <p style="color:#39ac69;">订单</p>
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
import $ from 'jquery'
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
                $.get(this.apiurl+'/order/product').done((result)=>{
                    this.qitalists=result.data
                })
            },
        } 
}
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .head{
        box-sizing: border-box;
        height: 200px;
        width: 100%;
        /* background: red; */
    }
    .head1{
        box-sizing: border-box;
        padding: 5px 10px;
    }
    .head2{
        margin-left: 10px;
        color: #999;
        font-size: 10px;
    }
    .head1-1{
        font-weight: bold;
        font-size: 15px;
    }
    .head1-3{
        float: right;
        font-size: 13px;
        color: #333;
    }
    .head3-1{
        width: 55px;
        height: 55px;
        margin-left: 10px;
        margin-top: 10px;
    }
    .head3-2{
        float: right;
        text-align: right;
    }
    .head3-2-1{
        color: red;
        margin-right: 10px;
    }
    .head3-2-2{
        font-size: 13px;
        color: #666;
        margin-right: 10px;
        
    }
    .head3-2-3{
        border-radius: 2px;
        color: #16a9ff;
        border: 1px solid #16A9ff;
        font-size: 10px;
        width: 50px;
        margin-right: 10px;
        float: right;     
        margin-top: 5px;   
    }
    .head3-2-4{
        display: block;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        text-align: center;
        padding: 6px 8px;
        margin-top: 40px;
        margin-right: 10px;
    }
    .head4{
        height: 10px;
        background-color: #f4f4f4;
        margin-top: 60px;
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
        background: url(/static/pic/nav4.png) no-repeat center -303px;
        background-size: 24px 600px;
        height: 50%;
    }
    
    .bot33{
        background: url(/static/pic/nav4.png) no-repeat center -353px;
        background-size: 24px 600px;
        height: 50%;
    }
    
    .bot44{
        background: url(/static/pic/nav4.png) no-repeat center -155px;
        background-size: 24px 600px;
        height: 50%;
    }
    
    .bot55{
        background: url(/static/pic/nav4.png) no-repeat center -453px;
        background-size: 24px 600px;
        height: 50%;
    }
</style>
