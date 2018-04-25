// 条件大纲
const conn = require('./conn.js')
module.exports = (req, res) => {
        let pid = req.body.pid,
            text = req.body.text,
            sql = 'insert into `outline` set `text`="' + text + '",`pid`="' + pid + '"'
        conn.query(sql, function (error, result) {
            if (error == null) {
                res.json({
                    error: 0,
                    message: 'OK!',
                    id:result.insertId
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
