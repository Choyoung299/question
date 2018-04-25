// 提交问卷
const conn = require('./conn.js')

module.exports = (req, res) => {
    let content = req.body.content,
        cuid = req.body.cuid,
        item = req.body.item,
        paper_id = req.body.paper_id,
        note = req.body.note,
        title = req.body.title

    let sql = 'insert into `answer` set ?'
    conn.query(sql, {
        content, item, paper_id, note, title, cuid
    }, function (error, result) {
        if (error == null) {
            res.json({
                error: 0,
                message: 'OK!',
            })
        } else {
            console.log(error)
            res.json({
                error: 1,
                message: 'error',
            })
        }
    })
}
