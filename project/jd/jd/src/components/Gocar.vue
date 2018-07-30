
<template>
    <div class="gocar">
        <!-- 头部位置区 -->
        <div class="top">
            <div class="top0">
                <span class="top1"></span>
                <span class="top2">南京市</span>
                <span class="top3">(当前位置)</span>
            </div>
        </div>
        <!-- 中间内容区 -->
        <div class="midr">
            <div class="midr0">
                <span class="midr1">沃尔玛-新街口店</span>
                <div v-for="list in qitalists" :key="list.id">
                    <div>
                        <img :src="list.img" alt="">
                        <p>¥{{list.price}}</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- 中间内容2 -->
        <div class="midr">
            <div class="midr0">
                <span class="midr1">沃尔玛-夫子庙店</span>
                <div v-for="list in qitalists" :key="list.id">
                    <div>
                        <img :src="list.img1" alt="" class="img">
                        <p class="pp">¥{{list.price}}</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- 底部导航栏 -->
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
            <p class="bot33"></p>
            <p style="color:#39ac69;">购物车</p>
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
                qitalists:[]
            }
        },
        created(){
            this.getqita()
        },
        methods:{
            getqita(){
                $.get(this.apiurl+'/gocar/product').done((result)=>{
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
    body{
        background-color: #f4f4f4;
        
    }
    .gocar{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .top{
        display: block;        
        height: 35px;
        width: 170px;
        margin: 0 auto;
        background-color: #d1e7d3;
        border-radius: 32px;
        text-align: center;
        line-height: 35px;
        color: white;
        box-sizing: border-box;
        margin-top: 20px;
        padding:5px;
    }
    .top0{
        background: #47b34f;
        width: 150px;
        height: 25px;
        border-radius: 32px;
        margin: 0 auto;
    }
    .top1{
        display: inline-block;
        background: url(/static/pic/gocar/loc2.png) 0px center no-repeat;
        background-size: 10px 12px;
        width: 22px;
        height: 22px;
    }
    .top2{
        display: inline-block;
        font-size: 14px;
    }
    .top3{
        display: inline-block;        
        font-size: 12px;
    }
    .top0 span{
        text-align: center;
        height: 22px;
        line-height: 25px;
        float: left;
        margin-left: 7px
    }
    .midr{
        margin-top: 10px;
        background: url(/static/pic/gocar/gc.png) no-repeat;
        background-size: 100% 154px;
        width: 100%;
        height: 141px;
    }
    .midr1{
        color: #333;
        font-size: 15px;
        float: left;
        margin-top: 15px;
        margin-left: 15px;
    }
    .midr0{
        height: 140px;
        background-size: 7px 11px;
        background: url(/static/pic/gocar/m.png) right 17px no-repeat;
        margin-right: 10px;
    }
    .midr img{
        float: left;
        position: absolute;
        left: 20px;
        top: 120px;
        width: 53px;
        height: 53px;
    }
    .midr .img{
        float: left;
        position: absolute;
        left: 20px;
        top: 275px;
        width: 53px;
        height: 53px;
    }
    .midr p{
        float: left;
        position: absolute;
        left: 25px;
        top: 175px;
        width: 53px;
        height: 53px;
        font-size: 12px;
        color: #333;
    }
    .midr .pp{
        float: left;
        position: absolute;
        left: 25px;
        top: 330px;
        width: 53px;
        height: 53px;
        font-size: 12px;
        color: #333;
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
        background: url(/static/pic/nav4.png) no-repeat center -105px;
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
