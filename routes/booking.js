const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin  = require('../middleware/requireLogin')
const book =  mongoose.model("Book")

router.put('/bookcar/:postId',requireLogin,(req, res) => {
    const {username,contactnum,dateofissue,returndate} = req.body 
    if(!username || !contactnum || !dateofissue || !returndate){
      return  res.status(422).json({error:"Plase Provide all the fields"})
    }
    req.user.password = undefined
    const book = new Book({
        username,contactnum,dateofissue,returndate
        postedBy:req.post,
        postedBy:req.user
    })
    book.save().then(mypost=>{
        res.json({book:mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/viewcarbooked',requireLogin,(req,res)=>{
    PUser.find({bookingstatus:true}).exec(function(err, result) {
      if (!err) {
        Post.find({postedBy:req.post._id})
        .populate("PostedBy","_id carname")
        .then(mypost=>{
            res.json({mypost})
        })
        .catch(err=>{
            console.log(err)
        })
      } else {
        return  res.status(422).json({error:"Check Booking status"})
      };
})

module.exports = router