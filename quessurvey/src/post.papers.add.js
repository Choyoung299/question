// 保存问卷
const conn = require('./conn.js')
module.exports = (req, res) => {
        let sql = 'insert into `paper` set ?'
        conn.query(sql,{
            title:req.body.title,
            content:req.body.content,
            item:req.body.content,
            creator_id:req.session.loginInfo.id
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
