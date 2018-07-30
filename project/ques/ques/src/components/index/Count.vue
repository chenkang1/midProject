<template>
<div id="count">
    <!-- 问卷分析 -->
    <el-card>
        <div slot="header">
            <span>统计分析</span>
        </div>
        <!-- 圆形图 -->
        <ve-pie :data="countData"></ve-pie>
    </el-card>
    <el-card>
        <!-- 下面个人表单分析 -->
        <div slot="header">
            <span>统计分析行</span>
        </div>
        <!-- 每行分析 -->
        <el-card v-for="(row,index) in countrowData" :key="'row'+index" id="elcard2">
            <ul>
                <li v-for="(con,index) in row.data.content" :key="'con'+index" id="li1">
                    <span id="con_text">{{con.text}}</span>
                    <el-tag type="primary">{{con.answerText}}</el-tag>
                </li>
            </ul>
            <ve-histogram :data="row" :extend="extend"></ve-histogram>
        </el-card>
    </el-card>

</div>
</template>

<script>
export default {
    props: ['paper_id'],
    // 初始化
    data() {
        return {
            countData: {
                columns: [],
                rows: []
            },
            countrowData: [],
        }
    },
    created() {
        this.getCount()
        this.getCountRow()
        this.extend = {
            series: {
                barWidth: '40px',
                default: '50%'
            }
        }
    },
    // 方法
    methods: {
        getCount() {
            this.$http.get('/answer/count', {
                params: {
                    paper_id: this.paper_id
                }
            }).then(result => {
                this.countData.columns = result.data.data.columns
                this.countData.rows = result.data.data.rows

            })
        },
        getCountRow() {
            this.$http.get('/answer/countrow', {
                params: {
                    paper_id: this.paper_id
                }
            }).then(result => {
                this.countrowData = result.data.data

            })
        },
    }
}
</script>

<style>
.el-card {
    margin-bottom: 10px;
}

#li1 {
    list-style: none;
    padding: 2px 0;
    width: 50%;
}

#con_text {
    display: inline-block;
    width: 40%;
    height: 10%;
}

#elcard2 {
    width: 40%;
    height: 100%;
    float: left;
    padding: 25px;
    margin: 5px;
}
</style>
