<template>
    <div class="all">
        <!-- 搜索头部 -->
        <div class="head">
            <!-- 左上角返回图标 -->
            <router-link to="/index" style="text-decoration: none;">    
            <span class="head1"></span>
            </router-link>
            <!-- 搜索框内容 -->
            <span class="head2">
                <span class="head2-1"></span>
                <span class="head2-2">世界杯</span>
            </span>
            <span class="head3">搜索</span>
        </div>
        <!-- 热门搜索 -->
        <div class="mid">热门搜索</div>
        <ul>
            <li style="color: #47B34F;">酸奶</li>
            <li>牛奶</li>
            <li>饮料</li>
            <li>零食</li>
            <li>啤酒</li>
            <li>面包</li>
            <li>牛肉面</li>
            <li>方便面</li>
            
        </ul>
    </div>
</template>

<script>
export default {

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
    .head1{
        width:34px;
        height: 44px;
        background: url(/static/pic/search/m.png) no-repeat;
        margin: 10px 20px;
        float: left;
    }
    .head2{      
        width: 75%;
        float: left;
        border-radius: 30px;
        height: 30px;
        background: #F4F4F4;
        color: #999999;
        margin-top: 8px;
        margin-left: -20px;
    }
    .head2-1{
        float: left;
        background: url(/static/pic/index_icon_sea.png) no-repeat;
        width: 22px;
        height: 22px;
        background-size: 20px auto;
        margin-top: 5px;
        margin-left: 10px;
    }
    .head2-2{
        font-size: 14px;
        float: left;
        margin-top: 5px;
        margin-left: 10px;
    }
    .head3{
        float: right;
        color: #333333;
        font-size: 14px;
        margin-top: 10px;
        margin-right: 10px;
    }
    .mid{
        width: 100%;
        float: left;
        font-size: 15px;
        color: #333;
        font-weight: bold;
        box-sizing: border-box;
        padding-left: 20px;
    }
    ul li{
        width: 80px;
        height: 30px;
        font-size: 13px;
        list-style: none;
        float: left;
        background: #F4f4f4;
        border-radius: 30px;
        margin-left: 20px;
        text-align: center;
        line-height: 30px;
        margin-top: 10px;
    }
</style>
