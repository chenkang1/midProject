<template>
<div>
    <!-- 菜单管理页面 -->
    <el-card>
        <div slot="header">
            <span>菜单管理</span>
            <!-- 添加菜单按钮 -->
            <el-button @click="btnStatus=true;dialogVisible=true;dialogTitle='添加'" type="primary" size="mini" icon="el-icon-plus">添加顶级菜单</el-button>
        </div>
        <!-- :default-expand-all="true"让树子节点展开 -->
        <el-tree :default-expand-all="true" v-loading="treeLoading" :data="menusList" :props="{children:'children',label:'text'}">
            <div style="width:100%;" slot-scope="{data}" onmousemove="this.querySelector('.optVisible').style.display='inline-block'" onmouseout="this.querySelector('.optVisible').style.display='none'">
                <i :class="data.icon"></i>{{data.text}}
                <!-- 让操作,上下移动按钮隐藏 -->
                <div class="optVisible" style="display:none;line-height:40px;" @click.stop>
                <!-- 让操作,上下按钮显示 -->
                <!-- <div style="display:inline;" @click.stop> -->

                    <el-tooltip :content="status==1?'当前显示':'当前隐藏'" placement="top" effect="light">
                        <el-switch @change="setStatus(data)" v-model="data.status" active-color="#9BCBFC" :active-value="1" :inactive-value="0" :width="30">
                        </el-switch>
                        
                    </el-tooltip>
                    
                    <!-- 操作下面的按钮 -->
                    <el-dropdown @command="select">
                        <!-- 操作按钮 -->
                        <el-button size="mini" round>操作</el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item :command="{type:'add',id:data.id}">
                                添加下级菜单
                            </el-dropdown-item>
                            <el-dropdown-item v-if="data.children.length==0" :command="{type:'delete',id:data.id}">
                                删除
                            </el-dropdown-item>
                            <el-dropdown-item :command="{type:'edit',id:data.id,row:data}">
                                编辑
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <!-- 上、下移动 -->
                    <el-button-group>
                        <!-- 向上移动 -->
                        <el-button type="default" circle size="mini" icon="el-icon-arrow-up" @click="sort(data.id,'up',data.sort)"></el-button>
                        <!-- 向下移动 -->
                        <el-button type="default" circle size="mini" icon="el-icon-arrow-down" @click="sort(data.id,'down',data.sort)"></el-button>
                    </el-button-group>

                </div>
            </div>
        </el-tree>

    </el-card>
    <!-- dialog弹框 -->
    <el-dialog width="400px" :title="dialogTitle" :visible.sync="dialogVisible" @close="dialogClose">
        <el-form label-position="left" :model="formData" ref="formData" :rules="rules" label-width="60px">
            <!-- 名称回填 -->
            <el-form-item label="名称" prop="text">
                <el-input v-model="formData.text"></el-input>
            </el-form-item>
            <!-- url回填 -->
            <el-form-item label="URL" prop="url">
                <el-input v-model="formData.url"></el-input>
            </el-form-item>
            <!-- icon图标回填 -->
            <el-form-item label="ICON" prop="icon">
                <el-select v-model="formData.icon">
                    <el-option label="无" value=""></el-option>
                    <el-option v-for=" icon in icons" :key="'icon'+icon" :value="icon">
                        <i :class="icon"></i>
                        <span>{{icon}}</span>
                    </el-option>

                </el-select>
                <i :class="formData.icon"></i>
            </el-form-item>
        </el-form>
        <div slot="footer">
            <!-- 取消按钮 -->
            <el-button type="danger" @click="dialogVisible=false">取 消</el-button>
            <!-- 添加确认按钮 -->
            <el-button :icon="buttonOkIcon" :disabled="buttonDisabled" type="primary" @click="menusAdd" v-show="btnStatus">确 定(add)</el-button>
            <!-- 编辑确认按钮 -->
            <el-button :icon="buttonOkIcon" :disabled="buttonDisabled" type="primary" @click="menusEdit" v-show="!btnStatus">确 定(edit)</el-button>
        </div>
    </el-dialog>

</div>
</template>

<script>
export default {
    data() {
        return {
            status:1,
            // 验证
            rules: {
                // 名称验证
                text: [{
                    validator: (rules, value, callback) => {
                        switch (true) {
                            case value.trim() === '':
                                callback(new Error('不能为空'));
                                break;
                            case !/^.{2,18}$/.test(value):
                                callback(new Error('名称必须在2-18位之间!'));
                                break;
                            default:
                                callback();
                        }
                    }
                }],
                // url验证
                url: [{
                    validator: (rules, value, callback) => {
                        switch (true) {
                            case value.trim() === '':
                                callback(new Error('不能为空'));
                                break;
                            case !/^(\/\w+)+$/.test(value):
                                callback(new Error('格式不正确,请重新输入!'));
                                break;
                            default:
                                callback();
                        }
                    }
                }]
            },
            // 数据初始化            
            btnStatus: true,
            treeLoading: false,
            buttonOkIcon: '',
            buttonDisabled: false,
            dialogTitle: '',
            dialogVisible: false, //dialog弹窗默认关闭
            menusList: [],
            formData: {
                text: "",
                icon: "",
                url: "",
                pid: 0
            },
            icons: [
                "el-icon-info",
                "el-icon-error",
                "el-icon-success",
                "el-icon-warning",
                "el-icon-question",
                "el-icon-back",
                "el-icon-arrow-left",
                "el-icon-arrow-down",
                "el-icon-arrow-right",
                "el-icon-arrow-up",
                "el-icon-caret-left",
                "el-icon-caret-bottom",
                "el-icon-caret-top",
                "el-icon-caret-right",
                "el-icon-d-arrow-left",
                "el-icon-d-arrow-right",
                "el-icon-minus",
                "el-icon-plus",
                "el-icon-remove",
                "el-icon-circle-plus",
                "el-icon-remove-outline",
                "el-icon-circle-plus-outline",
                "el-icon-close",
                "el-icon-check",
                "el-icon-circle-close",
                "el-icon-circle-check",
                "el-icon-circle-close-outline",
                "el-icon-circle-check-outline",
                "el-icon-zoom-out",
                "el-icon-zoom-in",
                "el-icon-d-caret",
                "el-icon-sort",
                "el-icon-sort-down",
                "el-icon-sort-up",
                "el-icon-tickets",
                "el-icon-document",
                "el-icon-goods",
                "el-icon-sold-out",
                "el-icon-news",
                "el-icon-message",
                "el-icon-date",
                "el-icon-printer",
                "el-icon-time",
                "el-icon-bell",
                "el-icon-mobile-phone",
                "el-icon-service",
                "el-icon-view",
                "el-icon-menu",
                "el-icon-more",
                "el-icon-more-outline",
                "el-icon-star-on",
                "el-icon-star-off",
                "el-icon-location",
                "el-icon-location-outline",
                "el-icon-phone",
                "el-icon-phone-outline",
                "el-icon-picture",
                "el-icon-picture-outline",
                "el-icon-delete",
                "el-icon-search",
                "el-icon-edit",
                "el-icon-edit-outline",
                "el-icon-rank",
                "el-icon-refresh",
                "el-icon-share",
                "el-icon-setting",
                "el-icon-upload",
                "el-icon-upload2",
                "el-icon-download",
                "el-icon-loading"
            ],
        }
    },
    created() {
        this.getMenusList()
    },
    methods: {
        // 设置菜单是否显示
        setStatus(data) {
            this.$http.get('/menus/status', {
                params: {
                    id: data.id,
                    status: data.status
                }
            }).then(() => {
                this.$root.$emit('getMenusList')
            })
        },
        //   排序
        sort(id, dir, sort) {
            this.$http.post('/menus/sort', this.$qs.stringify({
                id,
                dir,
                sort
            })).then(() => {
                this.getMenusList()
                this.$root.$emit('getMenusList')
            })
        },
        getMenusList() {
            this.treeLoading = true
            this.$http.get("/menus/list").then(result => {
                this.treeLoading = false
                if (result.data.error > 0 && result.data.error == 4) {
                    this.$router.push('/login')
                    return
                }
                this.menusList = this.$tree(result.data.data);

            });
        },
        //重置
        dialogClose() {
            this.$refs.formData.resetFields() //表单重置
            this.formData.pid = 0 //重置pid为0
        },
        // 添加
        menusAdd() {
            this.$refs.formData.validate((pass) => {
                if (!pass) {
                    return;
                }
                this.buttonOkIcon = "el-icon-loading";
                this.buttonDisabled = true;

                this.$http
                    .post("/menus/add", this.$qs.stringify(this.formData))
                    .then(result => {
                        this.buttonOkIcon = "";
                        this.buttonDisabled = false;
                        this.getMenusList();
                        this.dialogVisible = false; //关闭dialog弹窗
                        this.$root.$emit('getMenusList')
                    });
            })
        },
        // 编辑
        menusEdit() {
            this.$http.post('/menus/edit', this.$qs.stringify(this.formData)).then((result) => {
                this.dialogVisible = false
                this.getMenusList()
                this.$root.$emit('getMenusList')
            })
        },
        // 删除
        delete(id) {
            this.$http.get(`/menus/delete?id=${id}`).then(result => {
                this.getMenusList()
                this.$root.$emit('getMenusList')
            })
        },
        // 操作下拉判断
        select(obj) {
            switch (obj.type) {
                // 添加
                case 'add':
                    this.btnStatus = true
                    this.formData.pid = obj.id
                    this.dialogVisible = true;
                    this.dialogTitle = '添加下级菜单'
                    break;
                    // 编辑
                case 'edit':
                    this.btnStatus = false
                    this.dialogVisible = true;
                    this.dialogTitle = '编辑'
                    this.formData.text = obj.row.text
                    this.formData.icon = obj.row.icon
                    this.formData.url = obj.row.url
                    this.$set(this.formData, 'id', obj.id)
                    break;
                    // 删除
                case 'delete':
                    // 确认消息
                    this.$confirm('是否继续?', '提示', {
                        type: 'warning'
                    }).then(() => {
                        this.delete(obj.id)
                    }).catch(() => {
                        console.log('no')
                    })
                    break;

            }
        }
    }
}
</script>

<style>
/* 设置每行的样式 */

.el-tree-node__content {
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.el-button--primary {
    float: right;
}
</style>
