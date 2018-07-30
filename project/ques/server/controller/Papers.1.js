class Papers {
  constructor() { }
  async list(req, res) {
    let { pagesize, currentpage } = req.query
    pagesize = pagesize || 2
    currentpage = currentpage || 1
    let start = (currentpage - 1) * pagesize
    let total = await req.db.query('select count(1) count from `papers` where `creator_id`="'+req.session.loginInfo.id+'"', { type: req.db.QueryTypes.SELECT })

    let sql = 'SELECT p.id id,p.title title, p.creator_id creator_id, p.classes_id classes_id,u.username username,c.classname classname, p.content content, p.item item, p.ctime FROM `papers` p LEFT JOIN `users` u ON p.creator_id = u.id LEFT JOIN `classes` c ON p.classes_id= c.id where p.creator_id="' + req.session.loginInfo.id + '" order by p.id desc limit ' + start + ',' + pagesize
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
    if (req.session.logined == undefined) {
      res.send({
        error: 1,
        message: '请先登陆',
      })
      return
    }

    let { id, title, content, items, classes } = req.body
    let sql = 'update `papers` set `title`="' + title + '", `content`="' + content + '", `items`="' + items + '" `classes`="' + classes + ', `created_id`="' + req.session.loginInfo.id + '" where `id`="' + id + '"'
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
    let sql = 'delete from `papers` where `id`="' + id + '"'
    req.db.query(sql).then((result) => {
      res.send({
        error: 0,
        message: 'succes',
      })
    })
  }

  /* 添加 */
  add(req, res) {
    if (!req.session.logined) {
      res.send({
        error: 4,
        message: '请先登陆',
      })
      return
    }
    let { title, content, item, classes_id } = req.body
    // let sql = 'insert into `papers` set `item`="' + item + '",`classes_id`="' + classes_id + '" ,`title`="' + title + '",`content`="' + content
    let sql = 'insert into `papers` set `creator_id`=?, `item`=?,`classes_id`=?, `title`=?,`content`=?'
    req.db.query(sql, { replacements: [req.session.loginInfo.id, item, classes_id, title, content], }).then((result) => {
      res.send({
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
  async one(req, res) {
    let { id } = req.query
    let sql = 'select * from `papers` where `id`=?'
    let result = await req.db.query(sql, { replacements: [id], type: req.db.QueryTypes.SELECT })
    res.send({
      error: 0,
      message: 'success',
      data: result[0]
    })
  }
}

module.exports = new Papers()