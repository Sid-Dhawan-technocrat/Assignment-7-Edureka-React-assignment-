const Mealtypes = require('../models/Mealtypes')

exports.getMeal=(req,res)=>{
    const filter={}

    if(req.body.name && req.body.name.length>0){
        filter['name']={$in:req.body.name}
    }

    Mealtypes.find(filter).limit(2).skip(2*(req.params.pageNo-1))
    .then(result=>{
        res.status(200).json({
            message:"Mealtypes fetched sucessfully !",
            data:result
        })
    })
    .catch(error=>
        res.status(500).json({
            message:"DB error occured",
            data:error
        })
    )

}


exports.getMealtypes=(req,res)=>{
    Mealtypes.find()
    .then(result=>{
        res.status(200).json({
            message:"Mealtypes fetched sucessfully !",
            data:result
        })
    })
    .catch(error=>
        res.status(500).json({
            message:"DB error occured",
            data:error
        })
    )

}
