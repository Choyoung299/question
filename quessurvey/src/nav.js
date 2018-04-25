var path = require('path')
module.exports = (req,res)=>{
    if(req.query.paper_id){
        res.cookie('paper_id',req.query.paper_id)
    }
    
    res.sendFile(path.resolve('./')+'/public/'+req.params.filename)
}