<template>
<div id="paperslist">
    <el-card>
        <!-- 问卷管理 -->
        <div slot="header">
            <span>问卷管理</span>
            <!-- 添加按钮 -->
            <el-button @click="$router.push({name:'papersadd'})" type="primary" size="mini" icon="el-icon-plus">添加问卷</el-button>
        </div>
        <!-- 内容 -->
        <el-table :data="papersList" style="width: 100%">
            <!-- 标题列 -->
            <el-table-column prop="title" label="标题">
            </el-table-column>
            <!-- 日期列 -->
            <el-table-column prop="ctime" label="日期" :formatter="formatDate">
            </el-table-column>
            <!-- 创建人列 -->
            <el-table-column prop="username" label="创建人">
            </el-table-column>
            <!-- 班级列 -->
            <el-table-column prop="classname" label="班级">
            </el-table-column>
            <!-- 操作列 -->
            <el-table-column label="操作" width="270">
                <div slot-scope="{row}">
                    <!-- 删除按钮 -->
                    <el-button type="text" @click="del(row.id)">删除</el-button>
                    <!-- 编辑 -->
                    <router-link :to="{name:'papersedit',params:{id:row.id}}">
                        <el-button type="text">编辑</el-button>
                    </router-link>
                    <!-- 分析 -->
                    <router-link :to="{name:'count',params:{paper_id:row.id}}">
                        <el-button type="text">分析</el-button>
                    </router-link>
                    <!-- 分析 -->
                    <router-link :to="{name:'publish',params:{paper_id:row.id}}">
                        <el-button type="text">发布</el-button>
                    </router-link>
                </div>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div style="margin-top:20px">
            <el-pagination :current-page.sync="currentpage" :page-size="pagesize" @current-change="getPapersList" :total="total" background layout="prev,pager,next">
            </el-pagination>
        </div>
    </el-card>

</div>
</template>

<script>
// 引入moment
import moment from 'moment'

export default {
    // 初始化
    data() {
        return {
            papersList: [],
            pagesize: 4,
            currentpage: 1,
            total: 0,
        }
    },
    created() {
        this.getPapersList()
    },
    methods: {
        // moment时间
        formatDate(row){
            return moment(row.ctime).format('YYYY-MM-DD HH:mm:ss')
        },
        // 获取数据
        getPapersList() {
            this.$http.get('/papers/list', {
                params: {
                    pagesize: this.pagesize,
                    currentpage: this.currentpage,
                },
            }).then((result) => {
                this.total = result.data.total                
                this.papersList = result.data.data
            })
        },
        // 删除
        del(id) {
            this.$confirm('是否继续?', '提示', {
                type: 'warning'
            }).then(() => {
                this.$http.get('/papers/delete', {
                    params: {
                        id
                    },
                }).then((result) => {
                    this.getPapersList()
                })
            }).catch(() => {
                console.log('no')
            })

        },
    }
}
</script>

<style>
.el-button--primary {
    float: right;
}
</style>
