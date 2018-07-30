const moment = require('moment')
const md5 = require('md5')
class Users {
  constructor() { }
  /* 获取用户列表 */
  async list(req, res) {
    let { pagesize, currentpage } = req.query
    pagesize = pagesize || 10
    currentpage = currentpage || 1
    let start = (currentpage - 1) * pagesize
    let total = await req.db.query('select count(1) count from `users`', { type: req.db.QueryTypes.SELECT })
    let sql = 'select * from `users` limit ' + start + ',' + pagesize
    let result = await req.db.query(sql, { type: req.db.QueryTypes.SELECT })
    res.send({
      error: 0,
      message: 'succes',
      total: total[0].count,
      data: result
    })
  }
  /* 编辑 */
  edit(req, res) {
    let { id, username, phone, email } = req.body
    let sql = 'update `users` set `username`="' + username + '", `phone`="' + phone + '", `email`="' + email + '" where `id`="' + id + '"'
    req.db.query(sql).then((result) => {
      res.send({
        error: 0,
        message: 'succes',
      })
    })
  }
  /* 修改密码 */
  resetpassword2(req, res) {
    let { id, newpassword } = req.query
    let sql = 'update `users` set `password`="' + md5('newpassword') + '" where `id`="' + id + '"'
    req.db.query(sql).then((result) => {
      res.send({
        error: 0,
        message: 'succes',
      })
    })
  }
  /* 删除 */
  delete(req, res) {
    let { id } = req.query
    let sql = 'delete from `users` where `id`="' + id + '"'
    req.db.query(sql).then((result) => {
      res.send({
        error: 0,
        message: 'succes',
      })
    })
  }
  /* 重置密码 */
  resetpassword(req, res) {
    let { id } = req.query
    let sql = 'update `users` set `password`="' + md5('123123') + '" where `id`="' + id + '"'
    req.db.query(sql).then((result) => {
      res.send({
        error: 0,
        message: 'succes',
      })
    })
  }
  /* 判断字段值是否存在 */
 ///isexist?fieldname=username&fieldvalue=jack
  isexist(req,res) {
    let { fieldname, fieldvalue } = req.query
    let sql = 'select count(1) count from `users` where `' + fieldname + '`="' + fieldvalue + '"'
    req.db.query(sql).spread((result) => {
      if (result[0].count === 0) {
        res.send({
          error: 0,
          message: '不存在'
        })
      } else {
        res.send({
          error: 1,
          message: '存在'
        })
      }
    })
  }

  /* 用户登陆 */
  login(req, res) {
    let { username, password } = req.body
    let sql = 'select * from `users` where `username`=? && `password`=?'
    req.db.query(sql, {
      replacements: [username, md5(password)],
      type: req.db.QueryTypes.SELECT
    }).then((result) => {
      if (result.length == 0) {
        req.session.logined = false
        res.send({
          error: 1,
          message: 'fail',
        })
      } else {
        req.session.logined = true
        req.session.loginInfo = result[0]
        res.send({
          error: 0,
          message: 'succes',
          data: result
        })
      }
    }).catch((error) => {
      console.log(error)
      res.send({
        error: 1,
        message: 'fail'
      })
    })
  }
  // 注销
  logout(req,res){
    req.session.destroy(()=>{
      res.send({
        error:0,
        message:'ok'
      })
    })
  }
  /* 添加用户 */
  add(req, res) {
    let { username, password, email, phone } = req.body
    let ctime = moment().format('YYYY-MM-DD h:m:s')
    let sql = 'insert into `users` set `username`="' + username + '",`password`="' + md5(password) + '",`email`="' + email + '",`phone`="' + phone + '",ctime="' + ctime + '",mtime="' + ctime + '"'
    req.db.query(sql).then((result) => {
      res.send({
        info: req.session,
        error: 0,
        message: 'succes'
      })
    }).catch((error) => {
      console.log(error)
      res.send({
        error: 1,
        message: 'fail',
      })
    })
  }
    /* 个人资料 */
    async one(req, res) {
      if (req.session.logined == undefined) {
        res.send({
          error: 1,
          message: '请先登陆',
        })
        return
      }
      let { id } = req.query
      
      let sql = 'select * from `users` where `id`="' + req.session.loginInfo.id + '"'
      let result = await req.db.query(sql, { type: req.db.QueryTypes.SELECT })
      res.send({
        error: 0,
        message: 'succes',
        data: result[0],
      })
  
    }

}
module.exports = new Users()