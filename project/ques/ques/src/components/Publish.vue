<template>
<div id="publish">
    <!-- 问卷发布页面 -->
    <el-card>
        <!-- 头部样式 -->
        <div slot="header">
            <img src="/static/logo.png" alt="">
            <span>问卷</span>
            <b>{{paper.title}}</b>
            <i>{{paper.class_id}}</i>
        </div>
        <!-- 问卷内容 -->
        <el-card v-for="(content,index) in paper.content" :key="'con'+content.id" class="choose">
            <!-- 问卷主内容 -->
            <div slot="header">
                <span>{{index+1}}、{{content.text}}</span>
            </div>
            <el-radio v-for="item in items" :key="'item'+item.id" v-model="paper.content[index].answer" :label="item.id">{{item.text}}</el-radio>

        </el-card>
        <!-- 最下面建议框 -->
        <el-card>
            <div slot="header">
                <span>其他建议</span>
            </div>
            <el-input v-model="note" type="textarea" placeholder="其他建议"></el-input>

        </el-card>
        <!-- 提交按钮 -->
        <el-button type="primary" @click="save">提交</el-button>
    </el-card>

</div>
</template>

<script>
export default {
    props: ['paper_id'],
    // 初始化
    data() {
        return {
            paper: {},
            items: {},
            note: '',
            username:''
        }

    },
    // 获取
    created() {
        this.getPaper()
    },
    // 方法
    methods: {
        save() {
            // 判断是否全部答完
            if (this.jq('.el-card__body>.is-checked').length !== this.jq('.choose').length){
                this.$message({
                    message: '你还有一个未作答的题目!',
                    type: 'warning'
                });
                return
            }

            this.$http.post('/answer/add', this.$qs.stringify({
                paper_id: this.paper_id,
                content: JSON.stringify(this.paper.content),
                items: JSON.stringify(this.items),
                note: this.note,
            })).then(result => {
                console.log(result)
                this.$router.push('/over')

            })
        },
        getPaper() {
            this.$http.get('/papers/publish', {
                params: {
                    paper_id: this.paper_id
                }
            }).then(result => {
                result.data.data.content = JSON.parse(result.data.data.content)
                this.paper = result.data.data
                this.items = result.data.items

            })
        }

    }
}
</script>

<style>
.el-card {
    margin-bottom: 10px;
}
</style>
