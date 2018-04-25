var path = require('path')
module.exports = (req, res) => {
    res.sendFile(path.resolve('./') + '/public/login.html')
}