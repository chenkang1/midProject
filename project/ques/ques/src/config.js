import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
axios.defaults.withCredentials = true
import jquery from 'jquery'
import qs from 'qs'
import moment from 'moment'

/* 生成树状数据结构 */
function tree(data,pid=0,res=[]){
    data.forEach(function(row){
        if(row.pid===pid){
            row.children=[]
            res.push(row)
            tree(data,row.id,row.children)
        }
    })
    return res
}
// 设置全局
export default {
    install(vue,params){
        vue.prototype.apiUrl='http://127.0.0.1:3000'
        vue.prototype.$http = axios
        vue.prototype.jq = jquery
        vue.prototype.$qs = qs
        vue.prototype.$tree = tree
        vue.prototype.$moment = moment

    }
}