// 判断表字段是否存在
const conn = require('./conn.js')
module.exports = (req, res) => {
    setTimeout(() => {
        var filed = req.query.filed,
            table = req.query.table,
            value = req.query.value

        var sql = 'select `id` from `' + table + '` where `' + filed + '`="' + value + '"'
        conn.query(sql, function (error, result) {
            if (error == null) {
                if (result.length == 0) {
                    res.json({
                        error: 0,
                        message: 'ok',
                    })
                } else {
                    res.json({
                        error: 2,
                        message: '已存在',
                    })
                }
            } else {
                res.json({
                    error: 1,
                    message: 'error',
                })
            }
        })
    }, 500)
}

