const Restaurant = require('../models/Restaurant')


exports.getRestaurantByCity = (req, res) => {
    Restaurant.find({city:req.params.id})
        .then(result =>
            res.status(200).json({
                message:"Restaurants fetched sucessfully 👍",
                data: result
            })
        )
        .catch(
            error=>
            res.status(500).json({
                message:"DB error occurred",
                error:error
            })
        )
}

exports.getRestaurantByName = (req, res) => {
    const criteria = {
        name: req.params.name
    }
    Restaurant.find(criteria)
        .then(result =>
            res.status(200).json({
                message: "Restaurants fetched sucessfully 👍",
                data: result
            })
        )
        .catch(
            error =>
                res.status(500).json({
                    message: "DB error occurred",
                    error: error
                })
        )
}

exports.getAllRestaurants = (req, res) => {

    Restaurant.find()
        .then(result =>
            res.status(200).json({
                message: "Restaurants fetched sucessfully 👍",
                data: result
            })
        )
        .catch(
            error =>
                res.status(500).json({
                    message: "DB error occurred",
                    error: error
                })
        )

}

exports.FilterRestaurant=(req,res)=>{
    let filter={}
    if(req.body.lcost && req.body.hcost){
        filter.cost={
            $lt:req.body.lcost,
            $gt:req.body.hcost
        }
    }
    
    if(req.body.cuisine && req.body.cuisine.length>0){
        filter['Cuisine.name']={$in:req.body.cuisine}
    }

    if(req.body.city){
        filter.city=req.body.city
    }

    Restaurant.find(filter).limit(2).skip(2*(req.params.pageNo-1)).sort({cost:req.body.sort})
        .then(result =>
            res.status(200).json({
                message:"Restaurants fetched sucessfully 👍",
                data: result
            })
        )
        .catch(
            error=>
            res.status(500).json({
                message:"DB error occurred",
                error:error
            })
        )
}