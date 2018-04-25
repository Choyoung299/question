var path = require('path')
const conn = require('./conn.js')
const cuid = require('cuid')
module.exports = (req, res) => {

    if (!req.query.id) {
        require('./message')({
            status: 'error',
            msg: '你来晚了'
        }, res)
        return
    }

    //验证用户是否已经答过了
    var id = req.query.id
    if (req.cookies['releaseInfo' + id]) {
        require('./message')({
            status: 'error',
            msg: '回答完成'
        }, res)
        return
    } else {
        res.cookie('release_paper_id', id)
        res.cookie('releaseInfo'+id, JSON.stringify({
            paperId: id,
            cuid:cuid()
        }))
        res.sendFile(path.resolve('./') + '/public/release.html')
    }
}

