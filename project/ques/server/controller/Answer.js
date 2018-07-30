
class Answer {
  constructor() { }
  /* 整体统计 */
  async count(req, res) {
    let { paper_id } = req.query
    let result = await req.db.query('select * from `answers` where `paper_id`=?', {
      replacements: [paper_id],
      type: req.db.QueryTypes.SELECT
    })

    result.forEach((el, index) => {
      result[index].content = JSON.parse(result[index].content)
      result[index].items = JSON.parse(result[index].items)
    });

    let rows = {}
    result[0].items.forEach(el => {
      rows[el.id] = { text: el.text, value: 0 }
    });

    result.forEach(el => {
      el.content.forEach(cl => {
        rows[cl.answer].value++
      })
    });
    rows = Object.keys(rows).map(el => {
      return rows[el]
    })

    res.send({
      error: 0,
      message: 'fail',
      data: {
        columns: ['text', 'value'],
        rows
      },
      srcData: result
    })
  }
  /* 按行统计 */
  async countrow(req, res) {
    let { paper_id } = req.query
    let result = await req.db.query('select * from `answers` where `paper_id`=?', {
      replacements: [paper_id],
      type: req.db.QueryTypes.SELECT
    })
    result.forEach((el, index) => {
      result[index].content = JSON.parse(result[index].content)
      result[index].items = JSON.parse(result[index].items)
    });

    let rows = []
    result.forEach(el => {
      let row = {}
      el.items.forEach(el => {
        row[el.id] = { text: el.text, value: 0 }
      });
      el.content.forEach((cl,index) => {
        row[cl.answer].value++
        el.content[index].answerText = row[cl.answer].text
      })
      row = Object.keys(row).map(el => {
        return row[el]
      })
      rows.push({
        columns: ['text', 'value'],
        rows:row,
        data:el
      })
    });
    res.send({
      error: 0,
      message: 'fail',
      data: rows,
      srcData: result
    })
  }

  /* 添加 */
  async add(req, res) {
    let { content, paper_id, note, items } = req.body
    if (req.cookies['answer' + paper_id] == 1) {
      res.send({
        error: 5,
        message: '您已经回答过了'
      })
      return
    }
    let sql = 'insert `answers` set `content`=?, `paper_id`=?, `note`=?, `items`=?'
    let result = await req.db.query(sql, {
      replacements: [content, paper_id, note, items]
    })
    res.cookie('answer' + paper_id, '1', {
      expires: new Date(Date.now() + 3600000 * 24 * 30),
      httpOnly: true
    })
    res.send({
      error: 0,
      message: 'success'
    })
  }
}
module.exports = new Answer()