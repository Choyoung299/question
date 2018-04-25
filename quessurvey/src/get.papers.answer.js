// 问卷列表
const conn = require('./conn.js')
module.exports = (req, res) => {
    let paper_id = req.cookies.paper_id
    let sql = 'select a.id id, p.title title,a.paper_id paper_id,a.content content,a.item item, a.ctime ctime from answer a,paper p where a.paper_id=p.id && a.paper_id="' + paper_id + '"'
    conn.query(sql, function (error, result) {
        if (error == null) {
            res.json({
                error: 0,
                message: 'OK!',
                data: result
                
            })
        } else {
            console.log(error)
            res.json({
                error: 1,
                message: 'error',
            })
        }console.log(result)
    })
}
