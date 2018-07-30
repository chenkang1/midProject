const moment = require('moment')
class Menus {
  constructor() { }
  list(req, res) {
    let where = req.query.status ? '`status`="' + req.query.status + '"' : '1=1'
    let sql = 'select * from `menus`  where ' + where + ' order by `sort` asc'
    req.db.query(sql, {
      type: req.db.QueryTypes.SELECT
    }).then((result) => {
      setTimeout(() => {
        res.send({
          error: 0,
          message: 'success',
          data: result
        })
      }, 0);
    }).catch((error) => {
      console.log(error)
      res.send({
        error: 1,
        message: 'fail'
      })
    })
  }
  add(req, res) {
    let { text, url, icon, pid } = req.body
    let sql = 'insert into `menus` set `text`="' + text + '",`icon`="' + icon + '",`url`="' + url + '",`pid`="' + pid + '",`sort`="' + new Date().getTime() + '"'

    req.db.query(sql).then((result) => {
      setTimeout(() => {
        res.send({
          error: 0,
          message: 'success'
        })
      }, 5000);

    }).catch((error) => {
      console.log(error)
      res.send({
        error: 1,
        message: '添加失败'
      })
    })
  }
  delete(req, res) {
    let { id } = req.query
    let sql = 'delete from `menus` where `id`="' + id + '"'
    let sql2 = 'select `text` from `menus` where `pid`="' + id + '" '
    req.db.query(sql2, {
      type: req.db.QueryTypes.SELECT
    }).then((result) => {
      if (result.length > 0) {
        res.send({
          error: 21,
          message: '有子节点不能删除',
        })
      } else {
        req.db.query(sql).then((result) => {
          setTimeout(() => {
            res.send({
              error: 0,
              message: 'success'
            })
          }, 0);
        }).catch((error) => {
          console.log(error)
          res.send({
            error: 20,
            message: '删除失败'
          })
        })
      }
    }).catch((error) => {
      console.log(error)
      res.send({
        error: 1,
        message: '查询出错'
      })
    })
  }
  edit(req, res) {
    let { text, icon, url, id } = req.body
    let sql = 'update `menus` set `text`="' + text + '",`icon`="' + icon + '",`url`="' + url + '" where `id`="' + id + '"'
    req.db.query(sql).then((result) => {
      setTimeout(() => {
        res.send({
          error: 0,
          message: 'success',
        })
      }, 0);
    }).catch((error) => {
      console.log(error)
      res.send({
        error: 30,
        message: 'fail'
      })
    })
  }
  /* 排序 */
  sort(req, res) {
    let { id, dir, sort } = req.body
    let sql = {
      up: 'select * from `menus` where `sort`<"' + sort + '" order by id desc limit 1',
      down: 'select * from `menus` where `sort`>"' + sort + '" order by id asc limit 1'
    }
    req.db.query(sql[dir], {
      type: req.db.QueryTypes.SELECT
    }).then((result) => {
      if (result.length == 0) {
        res.send({
          error: 0,
          message: 'success',
        })
        return
      }
      req.db.query('update `menus` set `sort` = "' + result[0].sort + '" where `id`="' + id + '"').then(() => {
        req.db.query('update `menus` set `sort` = "' + sort + '" where `id`="' + result[0].id + '"').then(() => {
          res.send({
            error: 0,
            message: 'success'
          })
        })
      })
    }).catch((error) => {
      console.log(error)
      res.send({
        error: 1,
        message: 'fail'
      })
    })
  }
  /* 修改状态 1:显示, 0:不显示 */
  status(req, res) {
    let { id, status } = req.query
    let sql = 'update `menus` set `status`="' + status + '" where `id`="' + id + '"'
    req.db.query(sql).then((result) => {
      res.send({
        error: 0,
        message: 'success',
      })
    }).catch((error) => {
      console.log(error)
      res.send({
        error: 30,
        message: 'fail'
      })
    })
  }
}
module.exports = new Menus()