<template>
    <div>
        <!-- 首页头部 -->
        <div class="head" v-for="list in TopLists" :key="list.id">
            <div id="bbkk">
                <div>
                    <!-- 头部左边地址 -->
                    <img :src="list.img1" alt="" class="img1"> 
                    <span class="nj">南京市</span>
                    <img :src="list.img2" alt="" class="img2">
                </div>

                <div class="icon">
                  <span id="img3"></span>
                  <img :src="list.img" alt="">
                </div>
            </div>
            <!-- 搜索框 -->
            <router-link to="/search" style="text-decoration: none;">  
            <div class="sosuo">
                <img :src="list.img4" alt="">
                <span>{{list.title}}</span>
            </div>
            </router-link>
            <!-- 搜索框下面搜索提示 -->
            <div class="list1">
                <span>{{list.title1}}</span>
                <span>{{list.title2}}</span>
                <span>{{list.title3}}</span>
                <span>{{list.title4}}</span>
                <span>{{list.title5}}</span>
                <span>{{list.title6}}</span>
                <span>{{list.title7}}</span>
                
            </div>
        </div>
        <!-- 超市便利等十张展示图 -->
        <ul id="title-ul">
            <li v-for="list in PicLists" :key="list.id">
                <img :src="list.imgsrc" alt="">
                <p>{{list.title}}</p>
            </li>
        </ul>
<!-- swiper模板start -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="list in LunLists" :key="list.id">
                <img :src="list.imglun">
            </div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
    
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
    
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>
    <!-- 结束 -->

    <!-- 轮播下展示图 -->
    <ul id="show">
        <li v-for="list in ShowLists" :key="list.id">
            
            <img :src="list.imgshow" alt="">
        </li>
    </ul>
    <!-- 超市 -->
    <ul id="chao">
        <li v-for="list in ChaoLists" :key="list.id">
            <p>{{list.title1}}</p>
            <p>{{list.title2}}</p>
            <img :src="list.imgchao" alt="">
        </li>
    </ul>
    <!-- 秒杀 -->
    <div id="miaosha" v-for="list in MiaoshaLists" :key="list.id">
        <img id="tu1" :src="list.imgmiaosha" alt="">
        <div id="miao">
            <span>{{list.title}}</span>
            <img id="tu2" :src="list.imgright" alt="">
        </div>
        
    </div>
    <!-- 秒杀下面滑动图 -->
    <div id="miaoluns">
        <div id="miaolun" v-for="list in MiaohuaLists" :key="list.id">
            <img :src="list.imgsrc" alt="">
            <span>{{list.title1}}</span>
            <p class="miao1">{{list.title}}</p>
            <p class="miao2">{{list.pri1}}</p>
            <p class="miao3">{{list.pri2}}</p>
            
        </div>
    </div>  
    <!-- //app专享 -->
    <div class="appen" v-for="list in AppenLists" :key="list.id">
        <img :src="list.imgappen" alt="">
    </div>
    <!-- 三页轮播 -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="list in SanlunLists" :key="list.id">
                <img :src="list.img">
            </div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
        </div>
    </div>
    <!-- 附近的店铺抬头 -->
    <div>
        <span class="line"></span>
        <span class="line1">附近的店铺</span>
    </div>
    <!-- 附近的店铺 -->
    <ul class="near" v-infinite-scroll="loadMore" infinite-scroll-disabled="flag" infinite-scroll-distance="10">
        
        <li class="near1" v-for="list in ShopLists" :key="list.id">
            
            <div class="near2">
                <img :src="list.imgsrc" alt="">
            </div>
            
            <div class="near3">
                <!-- 店铺里面的抬头 -->
                <router-link :to="{name:'shop',params:{shopid:list.id}}" style="text-decoration: none;">
                <h2>{{list.title}}</h2>
                <p class="near3-1">
                    {{list.star}}
                    <span>{{list.num}}</span>
                    <span class="near3-1-1">{{list.title4}}</span>
                    <!-- 配送距离和时间 -->
                    <span class="near3-1-2">
                        {{list.num1}}{{list.word}}
                        {{list.num2}}{{list.word2}}
                    </span>
                </p>
                 </router-link>
                 <!-- 达达专送 -->
                <p class="near3-2">{{list.title1}}
                    <span class="near3-2-1">达达专送</span>
                </p>
                <!-- 店铺里面的满减 -->
                <ul class="near4">
                    <div class="near7" @click="cover"></div>
                    <li class="near5" v-for="(yhj,index) in list.yhj" :key="'yhj'+index">
                        <p class="near6">
                            <span class="near5-1">{{yhj.type}}</span>
                            <span class="near5-2">{{yhj.ttt}}</span>
                        </p>
                    </li>
                    
                </ul>
                
            </div>
           
        </li>
        
    </ul>
    <!-- 底部栏 -->
    <div class="av">
    </div>
    <div class="bot">
        <!-- 首页 -->
        <div class="bot1">            
            <p class="bot11"></p>
            <p style="color:#39ac69;">首页</p>
        </div>
        <!-- 分类 -->
        <div class="bot2">
            <router-link to="/sort" style="text-decoration: none;">
            <p class="bot22"></p>
            <p>分类</p>
            </router-link>
        </div>
        <!-- 购物车 -->
        <div class="bot3">
            <router-link to="/gocar" style="text-decoration: none;">
            <p class="bot33"></p>
            <p>购物车</p>
            </router-link>
        </div>
        <!-- 订单 -->
        <div class="bot4">
            <router-link to="/order" style="text-decoration: none;">  
            <p class="bot44"></p>
            <p>订单</p>
            </router-link>
        </div>
        <!-- 我的 -->
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
// 引入轮播插件
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
    // 初始化
    data(){
        return {
            flag:true,
            TopLists:[],
            PicLists:[],
            LunLists:[],
            ShowLists:[],
            ChaoLists:[],
            MiaoshaLists:[],
            MiaohuaLists:[],
            AppenLists:[],
            SanlunLists:[],
            ShopLists:[],
        }
    },
    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical',//垂直滚动
        direction:'horizontal',
        loop: true,
        autoplay:true,
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
    }, 
    
  })        
    },
    created(){
        this.getTopList()//头部
        this.getPicList()//首页十张
        this.getLunList()//轮播
        this.getShowList()//轮播下展示图
        this.getChaoList()//超市
        this.getMiaoshaList()//秒杀
        this.getMiaohuaList()//秒杀下面滑动图
        this.getAppenList()//app专享
        this.getSanlunList()//三页轮播
        this.getShopList()//附近的店铺
        // 下拉滚动
        $(window).scroll(()=>{
            let st = $(document).scrollTop()/100
            if(st>1){
                st = 1
                $('.icon').addClass('icon-end')
                return
            }else{
                $('.icon').removeClass('icon-end')                
            }
            $('#bbkk').css('background','rgba(78, 203, 86,'+st+')')
            $('.head').css('background','rgba(78, 203, 86,'+(1-st)+')')
        })
    },
    methods:{
        //超市下拉展示
        cover(){
            $(event.target).parent().toggleClass('near4-1')
            $(event.target).toggleClass('near7-1')
            
        },
        
        //附近的超市
        loadMore(){
            this.flag = false
            setTimeout(()=>{
                this.getShopList()
                this.flag = true
            },1000);
        },
        //头部
        getTopList(){
            $.get(this.apiurl+'/pic/top').done((result)=>{
                this.TopLists=result.data
            })
        },
        //首页十个首栏
        getPicList(){
            $.get(this.apiurl+'/pic/list').done((result)=>{
                this.PicLists=result.data
            })
        },
        //轮播图
        getLunList(){
            $.get(this.apiurl+'/pic/lun').done((result)=>{
                this.LunLists=result.data
            })
        },
        //轮播下面两张展示图
        getShowList(){
            $.get(this.apiurl+'/pic/show').done((result)=>{
                this.ShowLists=result.data
            })
        },
        //超市
        getChaoList(){
            $.get(this.apiurl+'/pic/chao').done((result)=>{
                this.ChaoLists=result.data
            })
        },
        //秒杀
        getMiaoshaList(){
            $.get(this.apiurl+'/pic/miaosha').done((result)=>{
                this.MiaoshaLists=result.data
            })
        },
        //秒杀下面滑动图
        getMiaohuaList(){
            $.get(this.apiurl+'/pic/miaohua').done((result)=>{
                this.MiaohuaLists=result.data
            })
        },
        //app专享
        getAppenList(){
            $.get(this.apiurl+'/pic/appen').done((result)=>{
                this.AppenLists=result.data
            })
        },
        //三页轮播
        getSanlunList(){
            $.get(this.apiurl+'/pic/sanlun').done((result)=>{
                this.SanlunLists=result.data
            })
        },
        //附近的店铺
        getShopList(){
            $.get(this.apiurl+'/shop/list').done((result)=>{
                this.ShopLists=this.ShopLists.concat(result.data)
                // this.ShopLists=(result.data)
                
            })
        },
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #title-ul {
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        margin-top: 15px;
    }
    #title-ul li{
        list-style: none; 
        width: 20%;
        height: 80px;
        text-align: center; 
    }
    #title-ul li img{
        width: 40px; 
     }
    #title-ul li p{
         margin-top: 5px;
         font-size: 10px;
     }
     /* 头部 */
     .head{
         height: 110px;
         background: rgba(78, 203, 86,1);
     }
     .head img{
         width: 20px;
         padding: 10px;
     }
     .img1{
         float: left;
         width: 50%;
     }
     .img2{
         float: left;
         margin-top: 5px;
         width: 50%;
     }
     #img3{
        width: 30px;
        height: 40px;
        float: right;
        background: url(/static/pic/search.png) -4px -85px no-repeat;
        background-size: 30px;
     }
     #bbkk .nj{
         color: white;
         float: left;
         margin-top: 10px;
     }
     #bbkk{
         height: 44px;
         width: 100%;
         position: fixed;
         top:0;
         left: 0;
         z-index: 99;
         background: rgba(78,203,86,0.2);

     }
    #bbkk .icon{
        line-height: 50px;
        color: white;
        float: right;
        margin-right: -30px;
    }
    #bbkk .icon-end{
        margin-right: 0;
    }
    /* 搜索框 */
    .sosuo{
        width: 95%;
        height: 35px;
        text-align: center;
        line-height: 35px;
        margin-left: 10px;
        margin-right: 10px;
        background: white;
        float: left;
        border-radius: 50px;
        margin-top: 50px;
        box-sizing: border-box;
    }
    .sosuo img{
        float: left;
        margin-left: 145px;
    }
    .sosuo span{
        color: #999;
        font-size: 14px;
        float: left;
    }
    .list1{
        color: white;
        margin-left: 15px;
        font-size: 10px;
    }
    .list1 span{
        margin-left: 10px;
    }
    /* 轮播 */
   .swiper-container{
       margin-left: 10px;
       margin-right: 10px;
   }
   .swiper-slide img{
       width: 100%;
       margin-top: 10px;
   }
   #show{
       box-sizing: border-box;
       margin-top: 20px;
   }
   #show li{
        list-style: none;
        float: left;
        margin-left: 10px;
        text-align: center;
        width: 46%;
   }
   #show li img{
       width: 100%;
   }
   #chao{
       display: flex;
       width: 100%;
   }
  #chao li{
      list-style: none;
      text-align: center;
      float: left;
      width: 25%;
      font-size: 10px;
  }
  #chao li img{
      width: 60px;
      height: 60px;
  }
  #chao li p:nth-child(2){
      color:red;
  }
   #miaosha{
       box-sizing: border-box;
       margin-top: 20px;
   }
   #miaosha #tu1{
       height: 20px;
       line-height: 20px;
       padding: 5px 10px;
   }
   #miaosha #miao{
       float:right;
       margin-right: 10px;
       height: 10px;
       color: red;
       font-size: 10px;
       line-height: 10px;
       margin-top: 5px;
   }
   #miaosha #tu2{
       height: 10px;
   }
   /* 秒杀下面滑动图 */
   #miaoluns{
       display: flex; 
       flex-flow: row;
       height: 150px;
       text-align: center;
       white-space: nowrap;
       box-sizing: border-box;
       /* width: auto; */
       overflow: auto;
   }
   #miaolun img{
       width: 80px;
   }
   #miaolun:last-child img{
       margin-top: 60px;       
       width: 20px;
       height: 20px;
   }
   #miaolun:last-child span{
        margin-top: 40px;
        float: right;
   }
   .miao1{
       width: 70px;
       background: rgba(255,87,87,0.6);
       border-radius: 10px;
       color: white;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
       font-size: 9px;
       margin-top: -10px;
       position: relative;
       z-index: 99;
       padding-left: 5px;
   }
   .miao2{
       font-weight: bold;
       color: #ff5757;
   }
   .miao3{
       color: #999;
       text-decoration: line-through;
   }
   #miaoluns span{
       writing-mode: vertical-lr;
       color: #999;
   }
   #miaoluns #miaolun img:last-child{
       width: 40px;
       height: 40px;
   }
   /* app专享 */
    .appen{
        box-sizing: border-box;
        margin: 10px;
    }
    .appen img{
        width: 100%;
    }
    .line{
        border: 1px solid #333;
        /* height: 1px; */
        width:300px;
        text-align: center;
        line-height: 1px;
        writing-mode: vertical-lr;
        margin-left: 50px;
    }
    .line1{
        display: block;
        width: 100px;
        background: white;
        position: relative;
        left:37%;
        top:-15px;
        text-align: center;
        font-weight: bold;
    }
    .near1{
        display: flex;
        box-sizing: border-box;
        border: 1px solid rgba(0,0,0,0.1);
    }
    .near img{
        width: 64px;
        height: 64px;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 5px;
    }
    .near2{
        margin-left: 10px;
        margin-top: 10px;
    }
    .near4{
        border-top:1px solid rgba(0,0,0,0.1); 
    }
    .near3{
        flex:auto;
        margin-top: 10px;
        margin-left: 5px;
    }
    .near3 h2{
        font-size: 15px;
        color: #333;
    }
    .near3-1{
        color: orange;
    }
    .near3-1-1,.near3-2,.near3-1-2{
        color:#999;
        font-size: 10px;
        margin: 5px;
    }
    .near3-1-2,.near3-2-1{
        float: right;
    }
    .near3-2-1{
        color:#16a9ff;
        border: 1px solid #16a9ff;
        border-radius: 2px;
    }
    .near4 .near5{
        list-style: none;
    }
    .near4{
        height: 45px;
        overflow: hidden;
    }
    .near4-1{
        height: auto;
    }
    .near5{
        margin-top: 5px;
        font-size: 10px;
    }
    .near5-1{
        background: #ff5757;
        color: white;
        border-radius: 2px;
    }
    .near6{
        color:#999;
        font-size: 10px;
    }
    .near7{
        background:url(/static/pic/index.png) no-repeat -5px -370px;;
        width: 18px;
        height: 10px;
        float: right;
        margin-top: 10px;
    }
    .near7-1{
        background:url(/static/pic/index.png) no-repeat -5px -330px;;
        width: 18px;
        height: 10px;
        float: right;
        margin-top: 10px;
    }
    .av{
        background: url(/static/pic/2018.png) bottom center no-repeat;
        background-size: 100%;
        height: 82px;
        position: fixed;
        right: 0;
        bottom: 50px;        
        left: 0;
        z-index: 99;
    }
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
        background: url(/static/pic/nav4.png) no-repeat center 0px;
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
        background: url(/static/pic/nav4.png) no-repeat center -455px;
        background-size: 24px 600px;
        height: 50%;
    }
    
</style>
