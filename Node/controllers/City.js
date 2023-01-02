const City = require('../models/City')

exports.getcity = (req, res) => {
    const filter = {}
    filter['city_id']={$in:req.body.city_id}
    
    City.find(filter).limit(2).skip(2 * (req.params.pageNo - 1))
        .then(result => {
            res.status(200).json({
                message: "Locations are fetched successfully",
                data: result
            })
        })
        .catch(
            error=>{
                res.status(500).json({
                    message:"DB error occured",
                    error:error
                })
            }
        )
}

exports.getlocations = (req,res)=>{
    City.find()
    .then(result => {
        res.status(200).json({
            message: "Locations are fetched successfully",
            data: result
        })
    })
    .catch(
        error=>{
            res.status(500).json({
                message:"DB error occured",
                error:error
            })
        }
    )
}
