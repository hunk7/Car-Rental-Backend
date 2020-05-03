const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin  = require('../middleware/requireLogin')
const Post =  mongoose.model("Post")

router.post('/addcar',requireLogin,(req,res)=>{
    const {carname,colour,model,capacity,vehiclenumber,rentperday,bookingstatus,city} = req.body 
    if(!carname || !colour || !model || !capacity || !vehiclenumber || !rentperday || !bookingstatus || !city){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    req.user.password = undefined
    const post = new Post({
        carname,colour,model,capacity,vehiclenumber,rentperday,bookingstatus,city,
        postedBy:req.user
    })
    post.save().then(mypost=>{
        res.json({post:mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/viewcars',requireLogin,(req,res)=>{
    Post.find({postedBy:req.user._id})
    .populate("PostedBy","_id name")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.put('/updatecar/:postId',requireLogin,(req, res) => {
    Post.find({bookingstatus : true}).exec(function(err, result) {
      if (!err) {
        Post.findByIdAndUpdate(req.params.postId, {
        bookingstatus: req.body.bookingstatus,
        carname:req.body.carname,
        colour:req.body.colour,
        model:req.body.model,
        capacity:req.body.capacity,
        vehiclenumber:req.body.vehiclenumber,
        rentperday:req.body.rentperday,
        city:req.body.city
    }, {new: true})
    .then(mypost => {
        if(!mypost) {
            return res.status(404).send({
                message: "Post not found with id " + req.params.postId
            });
        }
        res.send({message: "Update successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Post not found with id " + req.params.postId
            });                
        }
        return res.status(500).send({
            message: "Could not delete car post with id " + req.params.postId
        });
    });
    } else {
        return res.status(200).send({
                message: "Cannot Update if bookingstatus True"
            });
    }


    });
    
});

router.delete('/deletecar/:postId',requireLogin,(req, res) => {
    Post.find({bookingstatus : true}).exec(function(err, result) {
      if (err) {
        return
      }
    });
    Post.findByIdAndRemove(req.params.postId)
    .then(mypost => {
        if(!mypost) {
            return res.status(404).send({
                message: "Post not found with id " + req.params.postId
            });
        }
        res.send({message: "Post deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Post not found with id " + req.params.postId
            });                
        }
        return res.status(500).send({
            message: "Could not delete post with id " + req.params.postId
        });
    });
});

module.exports = router