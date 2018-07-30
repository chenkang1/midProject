<template>
<div id="index">
    <el-container>
        <!-- 问卷头部 -->
        <el-header height="">
            <!-- 图片 -->
            <img src="/static/logo.png">
            <span>随堂问卷管理系统</span>
            <!-- 注销和登录用户 -->
            <el-button type="text" @click="logout">
                注销  [{{username}}]
            </el-button>
        </el-header>
        <!-- 左边内容栏 -->
        <el-container>
            <el-aside width="200px">
                <el-menu default-active="/index" :router="true">
                <!-- 内容栏 -->
                    <template v-for="menu in menusList">
                        <el-menu-item v-if="menu.children.length==0" :key="menu.sort" :index="menu.url">
                            <i :class="menu.icon"></i> {{menu.text}}
                        </el-menu-item>
                        <!-- 内容栏子元素 -->
                        <el-submenu v-if="menu.children.length>0" :index="menu.url" :key="menu.sort">
                            <span slot="title">
                                <i :class="menu.icon"></i>
                                {{menu.text}}
                            </span>
                            <el-menu-item v-for="submenu in menu.children" :index="submenu.url" :key="submenu.sort">
                                <i :class="submenu.icon"></i> {{submenu.text}}
                            </el-menu-item>
                        </el-submenu>

                    </template>
                    <!-- <el-menu-item index="/index/menus">大纲</el-menu-item> -->
                </el-menu>

            </el-aside>
            <el-main height="">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>

</div>
</template>

<script>
export default {
    // 初始化
    data() {
        return {
            menusList: [],
            username: ''
        }
    },
    // 获取数据
    created() {
        this.getMenusList()
        this.$root.$on('getMenusList', () => {
            this.getMenusList()
        })
    },
    // 方法
    methods: {
        // 注销方法
        logout() {
            this.$http.get('/users/logout').then(result => {
                this.$router.push('/login')
            })
        },
        getMenusList() {
            this.treeLoading = true
            this.$http.get(`/menus/list?status=1`).then(result => {
                this.treeLoading = false
                if (result.data.error > 0 && result.data.error == 4) {
                    this.$router.push('/login')
                    return
                }
                this.menusList = this.$tree(result.data.data);
                // 注销旁边的用户名
                this.$http.get('/users/one').then(result => {
                    this.username = result.data.data.username
                })
            });
        },
    }
};
</script>
