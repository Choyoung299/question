// 读取用户表
const conn = require('./conn.js')

module.exports = (req,res) => {
    var sql = 'select * from `ques`'
    setTimeout(() => {
    conn.query(sql,function(error,result){
        if(error==null){
            res.json({
                error:0,
                message:'OK!',
                data:result
            })
        }else{
            console.log(error)
            res.json({
                error:1,
                message:'error',
            })
        }
    })
    },1000)
}