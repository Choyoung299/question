var path = require('path')
module.exports=(obj,res)=>{
    res.cookie('message', JSON.stringify({
        status: obj.status ||'success',
        link: obj.link || '',
        linkText: obj.linkText || '',
        msg: obj.msg ||''
    }))
    res.sendFile(path.resolve('./') + '/public/message.html')
}