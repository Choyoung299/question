//链接数据库
const mysql = require('mysql')
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'question'
})
conn.connect()
module.exports = conn