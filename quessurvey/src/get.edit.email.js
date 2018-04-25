// 提交问卷
const conn = require('./conn.js')

module.exports = (req, res) => {
    let val = req.query.val,
        id = req.session.loginInfo.id
    let sql = 'update `ques` set ? where `id`="' + id + '"'
    conn.query(sql, {email:val}, function (error, result) {
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
