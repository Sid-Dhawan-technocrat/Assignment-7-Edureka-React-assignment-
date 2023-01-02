const mongoose = require('mongoose')

const mealSchema=mongoose.Schema({
    content:{
        type:String,
    },
    image:{
        type:String,
    },
    name:{
        type:String,
    }
})

module.exports=mongoose.model("Mealtype",mealSchema,'mealtype')