const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const bookSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    contactnumber:{
        type:String,
        required:true
    },
    dateofissue:{
        type: Date,
         default: Date.now,
        required:true
    },
    returndate:{
        type: String,
        required:true
    },
    postedBy:{
       type:ObjectId,
       ref:"Post"
    },
    postedBy:{
       type:ObjectId,
       ref:"User"
    }
},{timestamps:true})

mongoose.model("Book",bookSchema)