// 读取问卷列表
const conn = require('./conn.js')

module.exports = (req, res) => {
    let id = req.session.loginInfo.id
    let sql = 'select * from `ques` where `id`="'+id+'"'
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
        }
    })
}
