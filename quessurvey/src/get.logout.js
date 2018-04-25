
var path = require('path')
module.exports = (req, res) => {
    req.session.destroy(function (error) {
        res.cookie('message', JSON.stringify({
            status: 'error',
            link: '/login',
            linkText: '重新登录',
            msg: '注销成功',
            userInfo:null
        }))
        res.sendFile(path.resolve('./') + '/public/message.html')
    })
}