//根据条件返回问卷列表
const conn = require('./conn.js')

module.exports = (req, res) => {
    let id = req.query.id
    console.log(id)
    let sql = 'select * from `paper` where `id`="' + id + '"'
    conn.query(sql, function (error, result) {
        if (error == null) {
            res.json({
                error: 0,
                message: 'OK!',
                data: result[0]
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
