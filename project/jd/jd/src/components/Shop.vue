<template>
    <div class="all">
        <!-- 抬头 -->
        <div id="taitou" v-for="list in toplists" :key="list.id">
            <img :src="list.imgsrc" alt="" class="topi">
            <div class="topi-1">
                <h2>{{list.title1}}</h2>
                <p>{{list.title2}}</p>
                <p>{{list.title3}}
                    <span class="dp" @click="dp">店铺信息</span>
                </p>
            </div>
            <div class="topi-2"></div>
            <ul class="ccc">
                <li class="ccc-1" v-for="(ccc,index) in list.yhj" :key="index">
                    <p>
                        <span class="ccc-2">{{ccc.type}}</span>
                        <span>{{ccc.ttt}}</span>
                    </p>
                </li>
            </ul>
            <!-- 收起按钮 -->
            <div class="up">
                <span class="up-1">点击收起</span>
                <span class="up-2"></span>
            </div>
            <div class="ggao">
                <p>
                    <span class="ggao-1">{{list.title5}}</span>
                    <span>{{list.word}}</span>
                </p>
            </div>
            <div class="youh"></div>
            <span class="youh1">店铺优惠劵</span>
            <!-- 优惠券 -->
            <div class="juan">
                <ul>
                    <li class="juan1" v-for="(bbb,index) in list.yhj1" :key="index">
                        <p class="juan1-1">{{bbb.title8}}</p>
                        <div class="juan1-2">
                            <p>{{bbb.title9}}</p>
                            <p>{{bbb.title10}}</p>
                            <p>领取后当日有效</p>
                        </div>
                        <img :src="list.imgsrc3" alt="">
                        <p class="juan1-3">
                            <span>领劵</span>
                        </p>
                    </li>
                </ul>
            </div>
            <!-- 店铺评价 -->
            <div class="youh"></div>
            <span class="youh1">店铺评价</span>
            <div class="pjia">
                <div class="pjia3">
                    <div class="pjia1">
                        <p>4.9</p>
                        <p>综合评分</p>
                    </div>
                    <div class="pjia2">
                        <p>9975</p>
                        <p>评论数</p>
                    </div>
                </div>
                <div class="pjia4" v-for="list in pjialists" :key="list.id">
                    <img :src="list.img" alt="" class="pjia4-1">
                    <p class="pjia4-2">
                        <span>{{list.title1}}</span>
                        <span>{{list.time}}</span>
                    </p>
                    <span class="pjia4-3">{{list.sdr}}</span>
                    <p class="pjia4-4">
                        <img :src="list.img1" alt="">
                        <span>{{list.title2}}  {{list.title3}}  {{list.title4}}</span>
                    </p>
                    <div class="pjia5">
                        <span class="pjia5-1"></span>
                        <span class="pjia5-2">味千 猪骨汤拉面 305g 两人份</span>
                        <span class="pjia5-2">Vinda/维达 超韧系列抽取式面巾纸 153*195mm/张 150抽*3包</span>
                        <span class="pjia5-2">早春黄玉西瓜 约1kg-1.25kg</span>
                        <span class="pjia5-2">啵乐乐 韩国进口 牛奶味饮料 235ml</span>
                    </div>
                </div>
                <div class="pjia6">查看用户的全部评价 ></div>
            </div>
            <!-- 店铺信息 -->
            <div class="youh"></div>
            <span class="youh1">店铺信息</span>
            <div class="inte">
                <div>
                    <div class="inte1"></div>
                    <div class="inte2">14天包退 ></div>
                </div>
                <div>
                    <ul class="inte3">
                        <li>商品数量:2001件</li>
                        <li>月销单量:1万+</li>
                        <li>关注人数:4416人</li>
                        <li>营业时间:09:00-20:00</li>
                        <li>门店地址:江苏省南京市秦淮区洪武路88号悦荟广场2楼收银台处</li>
                        <li>门店电话:02584782908</li>
                    </ul>
                </div>
                <div>
                    <p class="inte4">商家资质
                        <span>></span>
                    </p>
                </div>
                <div>
                    <p class="inte4">举报商家得红包
                        <span>最高奖100元 ></span>
                    </p>
                </div>
            </div>
            <div class="inte5" @click="xiaoshi">
                <p class="inte5-1"></p>
                <p class="inte5-2">点击继续购物</p>
            </div>
        </div>
        <!-- 搜索框 -->
        <div class="top1">
            <div class="top1-1">
                <span class="top1-2">搜索店内商品</span>
            </div>
        </div>
        <!-- 下面内容 -->
        <div id="shop">
            <!-- 左边内容 -->
            <div class="left">
                <ul class="menu">
                    <li @click="leftbtn()" class="menu1" v-for="menu in menus" :key="menu.id">
                        <span class="text1">{{menu.text}}</span>
                        <ul class="menu3">
                            <li class="menu2" v-for="smenu in menu.children" :key="smenu.id">
                                <span  @click="loadProducts" class="text2">{{smenu.text}}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- 右边内容 -->
            <div class="right">
                <ul>
                    <li v-for="product in products" :key="product.id">
                        <router-link to="/Bear" style="text-decoration: none;">
                            <!-- 商品图片 -->
                            <img class="right1" :src="product.img" alt="">
                            <!-- 商品标题 -->
                            <h2 class="right2">{{product.title}}</h2>
                            <p class="right3"> 温馨提示:{{product.title1}}</p>
                            <p class="right4">月售{{product.num2}} | 好评100%</p>
                            <span class="right5">{{product.title2}}</span>
                        </router-link>
                        <p class="right6">
                            <!-- 商品价格 -->
                            <span class="right6-1">¥{{product.price}}</span>
                            <span class="right6-2">¥{{Math.round((product.price+10) * 100) / 100}}</span>
                            <!-- 商品页添加按钮 -->
                            <span @click="carAdd(product)" class="right7"></span>
                            <span v-if="product.id in $root.cars[shopid]">
                                <!-- 商品页数量变化 -->
                                <span class="right80">
                                    {{$root.cars[shopid][product.id].num}}
                                </span>
                                <!-- 商品页减少按钮 -->
                                <span @click="carSub(product)" class="right8"></span>
                            </span>
                            
                        </p>
                    </li>
                </ul>
                
                <car :shopid="shopid"></car>
            </div>
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
        
        <!-- 底部 -->
        <div class="botto">
            <div class="botto1"></div>
            <div class="botto2">购物车是空的</div>
            <div class="botto3">去结算</div>
        </div>
    </div>
</template>
<script>
// 引入jquery
import $ from 'jquery'

export default {
    props:['shopid'],
    components:{},
    // 初始化
    data(){
        return {
            menus:[],
            products:[],
            toplists:[],
            pjialists:[],
        }
    },
    created(){
        this.$set(this.$root.cars,this.shopid,{})//购物车初始化
        this.getShopMenus()
        this.loadProducts()
        this.getTopLists()
        this.getPjias()
    },
    methods:{
        carSub(product){
            this.$root.cars[this.shopid][product.id].num--
            if(this.$root.cars[this.shopid][product.id].num<=0){
                 this.$delete(this.$root.cars[this.shopid],product.id)
            }
        },
        carAdd(product){
            if(product.id in this.$root.cars[this.shopid]){
                // if(product.num>=product.store){
                if(this.$root.cars[this.shopid][product.id].num>=product.store){
                    
                    return
                }
                this.$root.cars[this.shopid][product.id].num++
            }else{
                product.num = 1
                this.$set(this.$root.cars[this.shopid],product.id,product)
                
            }
            $('.botto').css('display','none')
        },
        blc(){
            $('.blc1').slideToggle(1000)
            
        },
        // 左侧侧边栏
        leftbtn(){
            // $(event.target).next('ul').slideToggle(1000)
            
            $(event.target).next('ul').slideToggle(1000)
            $(event.target).css('color','#47b34f')
        },
        dp(){
            $('#taitou').css('height','auto')
        },
        xiaoshi(){
            $('#taitou').css('height','100px')
            $('.juan').hide()
        },
        getShopMenus(){
            $.get(this.apiurl+'/shop/menus').done((result)=>{
                this.menus=result.data
            })
        },
        loadProducts(){
            $.get(this.apiurl+'/shop/product').done((result)=>{
                this.products=result.data
            })
        },
        getTopLists(){
            $.get(this.apiurl+'/shop/top').done((result)=>{
                this.toplists=result.data
            })
        },
        getPjias(){
            $.get(this.apiurl+'/shop/pjia').done((result)=>{
                this.pjialists=result.data
            })
        }
    },
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
    #taitou{
        background: url(/static/pic/store_industry_1.jpg) no-repeat;
        height: 100px;
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        z-index: 999;
        background-size: cover;
        overflow: hidden;
    }
    .top1{
        background: white;
        height: 50px;
        position: absolute;
        top:100px;
        left: 0;
        right: 0;
        z-index: 1;
        padding: 10px;
        box-sizing: border-box;
        text-align: center;
    }
    .top1-1{
        height: 30px;
        background: #F4F4F4;
        border-radius: 20px;
        text-align: left;
        line-height: 30px;
    }
    .top1-2{

        font-size: 14px;
        color: #999;
        text-align: center;
        background: url(/static/pic/s1.png) no-repeat;
        background-size: 44px auto;
        background-position: -6px -4px;
        padding: 8px 10px 8px 32px;
        box-sizing: border-box;
        line-height: 30px;
        height: 30px;
    }
    #shop{
        position: absolute;
        left: 0;
        right: 0;
        top:150px;
        width: 100%;
        /* height: 100%; */
        overflow: hidden;
         bottom: 0;
        /* display: flex; */
        /* flex-flow: row; */
    }
    .left{
        width: 84px;
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        background: #F4F4F4;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .right{
        position: absolute;
        left: 84px;
        right: 0;
        bottom: 0px;
        top: 0px;
        background: #FFF;
        overflow: auto;
    }
    .menu{
        list-style: none;
        font-size: 12px;
    }
    .menu2{
        font-size: 12px;
        color: #666;
        background-color: #FFF;
        margin-top: 1px;
        width: auto;
        height: 46px;
        text-align: center;
        line-height: 46px;
    }
    .menu3{
        display: none;
    }
    .menu2:nth-child(1){
        display: block;
    }
    .menu .text1{
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
    /* 右侧黑色导航栏 */
    .blc{
        width: 36px;
        height: 36px;
        border: 1px solid #757575;
        border-radius: 4px 0 0 4px;
        position: fixed;
        right: 0;
        bottom: 300px;
        z-index: 999;
        background: black;
        background: rgba(0,0,0,0.8) url(/static/pic/bm1.png) 7px 7px no-repeat;
        background-size: 65px 20px;
    }
    .blc1{
            position: fixed;
            z-index: 99999;
            right: 0px;
            bottom: 340px;
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
    .topi{
        position: absolute;
        left: 10px;
        top: 10px;
        width: 50px;
        height: 50px;
        border-radius: 4px;
        border: 1px solid rgba(255,255,255,0.8);
        background: #FFF;
    }
    .topi-1{
        height: 100px;
        width: auto;
        margin-left: 70px;
        color: white;
        margin-top: 5px;
        font-size: 10px;
    }
    .topi-1 h2{
        font-size: 18px;
    }
    .topi-2{
        background: url(/static/pic/focus.png) no-repeat 0px 0px;
        width: 20px;
        height: 20px;
        background-size: 60px auto;
        position: absolute;
        right: 10px;
        top: 10px;
    }
    .ccc{
        box-sizing: border-box;
        float: left;
        position: absolute;
        left: 10px;
        top: 70px;
        /* width: 100%; */
        font-size: 10px;
        color: white;
    }
    .ccc-1{
        list-style: none;
        margin-top: 10px;
    }
    .ccc-2{
        background: #5FBC65;
    }
    .up{
        float: left;
        font-size: 11px;
        height: 20px;
        line-height: 20px;
        width:70px;
        text-align: left;
        color: #fff;
        background: rgba(0,0,0,0.5);
        position: absolute;
        top: 290px;
        right: 10px;
    }
    .up-2{
        width:20px;
        height:20px;
        float: right;
        /* display: inline; */
        background: url(/static/pic/store_sprites_4.6.png) no-repeat -13px -12px;
        background-size: 220px auto;
    }
    .ggao{
        clear: both;
        margin-top: 220px;
        margin-left: 10px;
        font-size: 10px;
        color: #fff;
    }
    .ggao-1{
        background: #fff;
        color: #333;
        border-radius: 2px;
    }
    .youh{
        margin-top: 20px;
        margin-left: 20px;
        width: 90%;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0.3);
    }
    .youh1{
        display: inline;
        color: white;
        position: relative;
        top: -12px;
        left: 165px;
        background: rgba(0, 0, 0, 0.1)
    }
    .juan{
        box-sizing: border-box;
    }
    .juan1{
        list-style:none;
        height: 70px;
        border-radius: 5px;
        border-left: 3px solid #ff5757;
        margin-left: 20px;
        display: flex;
        margin-top: 10px;
    }
    .juan1-1{
        background: white;
        height: 68px;
        line-height: 70px;
        width: 15%;
        border-top: 1px solid #ff9d9d;
        border-bottom: 1px solid #ff9d9d;
        text-align: center;
        font-size: 20px;
        color: #ff4f64;
        display: flex;
    }
    .juan1-2{
        background: white;
        width: 60%;
        float: left;
        border-top: 1px solid #ff9d9d;
        border-bottom: 1px solid #ff9d9d;
        font-size: 10px;
    
    }
    .juan1-2 p{
        margin-top:5px;
    }
    .juan1-3{
        background: white;
        width: 15%;
        float: left;
        border-top: 1px solid #ff9d9d;
        border-bottom: 1px solid #ff9d9d;
        font-size: 13px;
        color: #ff4f64;
        text-align: center;
        line-height: 70px;
    }
    .juan1-3 span{
        background: #ff5757;
        color: white;
        padding: 2px 11px;
        box-sizing: border-box;
        border-radius: 20px;
    }
    .juan1 img{
        width: 20px;
    }
    .pjia{
        width: 90%;
        margin: 0 auto;
        height: auto;
        background: rgba(255,255,255,0.1);
        box-sizing: border-box;
        /* display: flex; */
        
    }
    .inte{
        width: 90%;
        margin: 0 auto;
        height: 400px;
        background: rgba(255,255,255,0.1);
    }
    .pjia1,.pjia2{
        float: left;
        padding:20px 60px;
        box-sizing: border-box;
        text-align: center;
        color: #fff;
    }
    .pjia1{
        border-right: 1px solid #fff;
    }
    .pjia1 p:nth-child(1),.pjia2 p:nth-child(1){
        font-size: 27px;
    }
    .pjia3{
        box-sizing: border-box;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        height: 120px;
    }
    .pjia4{
        box-sizing: border-box;
        width: 100%;
        /* height: 190px; */
        /* background: red; */
    }
    .pjia4-1{
        border-radius: 50%;
        width: 35px;
        height:35px;
        margin: 10px;
    }
    .pjia4-2{
        float: right;
        margin-top: 10px;
        color: #FFF;
        font-size: 10px;
    }
    .pjia4-2 span:nth-child(1){
        margin-right: 165px;
    }
    
    .pjia4-3{
        color: orange;
        margin-left: 50px;
        margin-bottom: 20px;
    }
    .pjia4-4{
        color: rgba(255,255,255,0.6);
        font-size: 10px;
        margin-left: 50px;
        margin-top: 10px;
    }
    .pjia4-4 img{
        width: 13px;
    }
    .pjia5-1{
        display: inline-block;
        background: url(/static/pic/spriteZan.png) no-repeat -18px 0px; 
        width: 18px;
        height: 18px;
        background-size: 300% 100%;
        margin-left: 50px;
        margin-top: 10px;
    }
    .pjia5-2{
        overflow: hidden;
        border: 1px solid rgba(255,255,255,0.6);
        display: inline-block;
        border-radius: 3px;
        color: rgba(255,255,255,0.6);
        font-size: 12px;
        max-width: 82px;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: initial;
        margin-left: 10px;
    }
    .pjia5-2:last-child{
        margin-left: 82px;
        margin-top: 5px;
    }
    .pjia6{
        height: 46px;
        line-height: 46px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
    .inte1{
        background: url(/static/pic/5927cbe7N6bb0cdbe.png) center center no-repeat;
        width: 100%;
        height: 60px;
        background-size: 28px auto;
        text-align: center;
        box-sizing: border-box;
    }
    .inte2{
        box-sizing: border-box;
        font-size: 12px;
        padding: 0 0 10px 0;
        color: #FFF;
        text-align: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    .inte3{
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    .inte3 li{
        list-style: none;
        color: #FFF;
        font-size: 15px;
        box-sizing: border-box;
        padding: 5px;
    }
    .inte4{
        color: #FFF;
        font-size: 15px;
        padding:10px 5px;
        box-sizing: border-box;
    }
    .inte4 span{
        float: right;
    }
    .inte5{
        height: 50px;
        background:#f2f8f3;;
        margin-top: 50px;
    }
    .inte5-1{
        margin: 0 auto;
        background: url(/static/pic/store_sprites_4.6.png) no-repeat -10px -15px;
        width: 20px;
        height: 20px;
        background-size: 220px auto;
    }
    .inte5-2{
        text-align: center;
        color: #666;
    }
    .dp{
        float: right;
        border-radius: 4px;
        background: rgba(70,70,70,0.5);
        padding: 0 5px;
        margin-right: 5px;
    }
    .right li{
        list-style: none;
        margin-top: 30px;
        box-sizing: border-box;
        padding: 10px 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .right1{
        width: 65px;
        height: 65px;
        float: left;
        margin: 10px;
    }
    .right h2{
        font-size: 14px;
        color: #333;
        /* float: left; */
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 5px;
        line-height: 21px;
    }
    .right3{
        box-sizing: border-box;
        padding-left: 5px;
        font-size: 11px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #999;
    }
    .right4{
        color: #999;
        font-size: 11px;
        box-sizing: border-box;
        padding-top: 3px;
    }
    .right5{
        font-size: 12px;
        background: #FF5959;
        color: white;
        box-sizing: border-box;
        margin-top: 3px;
        padding: 1px 2px;
        border-radius: 2px;
    }
    .right6{
        display: block;
        padding-left: 25%;
    }
    .right6-1{
        font-size: 16px;
        color: #ff3434;
        padding-top: 2px;
        white-space: nowrap;
        display: inline-block;
    }
    .right6-2{
        padding-left: 5px;
        color: #999;
        font-size: 13px;
        text-decoration: line-through;
        display: inline-block;
    }
    .right7{
        background: url(/static/pic/addNumSprite.png) no-repeat;
        width: 30px;
        height: 30px;
        background-size: 400% 100%;
        float: right;
        box-sizing: border-box;
        /* margin: 5px; */
    }
    .right8{
        background: url(/static/pic/addNumSprite.png) -45px 0px no-repeat;
        width: 30px;
        height: 30px;
        background-size: 400% 100%;
        float: right;
        box-sizing: border-box;
        /* margin: 5px; */
    }
    .right80{
        float: right;
        margin-top: 5px;
    }
</style>
