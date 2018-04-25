// 排序
const conn = require('./conn.js')

module.exports = (req, res) => {
        let id = req.body.id,
        sort = req.body.sort,
        pid = req.body.pid
        let sql = 'update `outline` set `pid` ="'+pid+'",`sort` ="'+sort+'" where `id`="'+id+'" '
        conn.query(sql, function (error, result) {
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
