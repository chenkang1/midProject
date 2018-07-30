<template>
    <div class="all">
        <div class="sta" border="1px">
            <!-- 第一栏全选和清空购物车 -->
            <div class="carone" @click="carone"></div>
            <!-- 清空购物车按钮和全选按钮 -->
            <div class="sta1">
                    <input v-model="checked" @change="isselect" type="checkbox" checked="value">全选
                    <span @click="emptyCar" class="clearCar">清空购物车</span>
            </div>
            <!-- 购物车样式 -->
            <div class="sta2" v-for="product in $root.cars[shopid]" :key="product.id">
                <div class="sta3">
                    <input type="checkbox" v-model="pid" :value="product.id">
                </div>
                <div class="sta4">
                    <img :src="product.img" alt="" class="sta2-1">
                </div>
                <div class="sta2-0">
                    <span class="sta2-2">{{product.title}}</span>
                    <span class="sta2-3">¥{{product.price}}</span>
                    <span  class="sta2-4">
                            <button @click="carSub(product)">-</button>
                            {{$root.cars[shopid][product.id]?$root.cars[shopid][product.id].num:0}}
                            <button @click="carAdd(product)">+</button>
                    </span>
                </div>
                <!-- <td>{{Math.round(product.price*product.num*100)/100}}</td> -->
                
            </div>
        </div>
        <!-- 底部 -->
        <div class="bottos">
            <div class="bottos1" @click="bootos11">
                <span class="bootos11">
                </span>
               <span  class="bootos12">¥{{total}}</span> 
            </div>
            <div class="bottos2"></div>
            <div class="bottos3">去结算</div>
        </div>
    </div>
</template>

<script>
// 引入jquery
import $ from 'jquery'

export default {
  props: ["shopid"],
    //   初始化
  data() {
    return {
        pid:[],
        checked:false
    };
  },
  computed: {
    //   购物车计算
    total() {
      let sum = 0;
      this.pid.forEach((el)=>{
          let p = this.$root.cars[this.shopid][el]
          sum += p.num * p.price
      })
      return Math.round(sum * 100) / 100 ;
    },
    countpid(){
      return this.pid.length;
    },
    countcars(){
        return Object.keys(this.$root.cars[this.shopid]).length;
    }
  },
//   监听
  watch:{
    countpid(){
        if(this.countpid === this.countcars){
            this.checked = true
        }else{
            this.checked = false
        }
    }
  },
//   方法
  methods:{
    //   选中
        isselect(){
            if(this.checked){
                this.pid = Object.keys(this.$root.cars[this.shopid]);
            }else{
                this.pid = []
            }
        },
        carSub(product){
            product.num--;
            if(product.num==0){
                 this.$delete(this.$root.cars[this.shopid],product.id)
            }
        },
        // 添加购物车
        carAdd(product){
            
            if(product.id in this.$root.cars[this.shopid]){
                if(product.num>=product.store){
                    
                    return;
                }
                this.$root.cars[this.shopid][product.id].num++
            }else{
                product.num = 1
                this.$set(this.$root.cars[this.shopid],product.id,product);
                
            }
        },
        // 清空购物车
        emptyCar(){
            
            this.$set(this.$root.cars,this.shopid,{})
            this.pid.map((el)=>{this.pid.splice(0)})
            $('.carone').css('display','none')
            $('.sta').css('display','none')
            $('.bootos11').css('display','block')
            $('.all').removeClass('all111')

        },
        // 删除
        del(id){
            this.$delete(this.$root.cars[this.shopid],id)
        },
        // 点击购物车图标
        carone(){
            $('.all').toggleClass('all111')
            $('.carone').css('display','none')
            $('.sta').css('display','none')
            $('.bootos12').css('margin-left','80px')
            $('.bootos11').css('display','block')
            
        },
        // 购物车底部左边求和项变化
        bootos11(){
            $('.carone').css('display','block')
            $('.sta').css('display','block')
            $('.all').toggleClass('all111')
            $('.bootos11').css('display','none')
            $('.bootos12').css('margin-left','0px')
            $('.sta1').css('display','block')
            
        },

    }
};
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .all111{
        position: fixed;
        z-index: 999;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: rgba(0,0,0,0.4);
    }
    .carone{
        background: url(/static/pic/cart.png) center -75px no-repeat;
        width: 80px;
        height: 58px;
        background-size: 50px 125px;
        position: absolute;
        left: 0;
        top: -55px;
        display: none;
    }
    .sta{
        position: fixed;
        background: white;
        bottom: 50px;
        left: 0;
        right: 0;
        z-index: 999;
        display: none;
    }
    .sta1{
        height: 40px;
        border-bottom: 1px solid #ebebeb;
        line-height: 40px;
        color: #666;
        display: none;
    }
    .sta2 div{
        float: right;
    }
    .sta2{
        height: 80px;
        /* line-height: 80px; */
        font-size: 15px;
        border-bottom: 1px solid #ebebeb;
        display: flex;
        /* width: 100%; */
    }
    .sta4{
        line-height: 80px;
        margin-top: 10px;
    }
    .sta3{
        line-height: 80px;
    }
    .sta2-1{
        width: 52px;
        height: 52px;
    }
    .sta2-0 span{
        margin-top: 10px;
    }
    .sta2-0{
        width: 80%;
    }
    .sta2-2{
        
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .sta2-3{
        display: inline-block;
        color: #ff3434;
        font-size: 16px;
    }
    .sta2-4{
        float: right;
        margin-right: 10px;
    }
    .clearCar{
        float: right;
    }
   
    /* 底部样式 */
    .bottos{
        height: 50px;
        background: #fff;
        border-top: 1px solid #d9d9d9;
        position: fixed;
        bottom: -2px;
        left: 0;
        right: 0;
        display: flex;
        /* display: none; */
        
    }
    .bottos1{
        width: 20%;
        height: 58px;
        text-align: center;
        line-height: 58px;
        font-weight: normal;
        font-style: normal;
        color: red;
    }
    .bootos11{
        background: url(/static/pic/cart.png) center -75px no-repeat;
        width: 80px;
        height: 58px;
        background-size: 50px 125px;
        position: absolute;
        left: 0;
        top: -2px;
    }
    .bootos12{
        margin-left: 80px;
    }
    .bottos2{
        font-size: 15px;
        color: #999;
        line-height: 48px;
        width: 50%;
    }
    .bottos3{
        height: 51px;
        width: 30%;
        background-color: #47b34f;
        float: right;
        margin-right: 0px;
        text-align: center;
        line-height: 51px;
        color: white;
    }
        /* 底部样式 2*/
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
</style>
