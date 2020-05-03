const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    carname:{
        type:String,
        required:true
    },
    colour:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    capacity:{
        type:String,
        required:true
    },
    vehiclenumber:{
        type:String,
        required:true
    },
    rentperday:{
        type:Number,
        required:true
    },
    bookingstatus:{
        type:Boolean,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    postedBy:{
       type:ObjectId,
       ref:"User"
    }
},{timestamps:true})

mongoose.model("Post",postSchema)