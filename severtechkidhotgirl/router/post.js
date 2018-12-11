const express = require("express");
const PostRouter = express.Router();

const PostModel = require("../models/post")

//TODO: CRUD for post
//"/api/post"
PostRouter.post("/", (req, res) => {
    const newPost = req.body;
    PostModel.create(newPost, (err, userCreated) =>{
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.status(201).json({
            success: 1,
            message: "Post Success"
        });
    });
});


//Get all
PostRouter.get("/", (req, res) => {
    PostModel.find({}, (err, data) => {
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.json(data);
    });
});

// Get by id
PostRouter.get("/?id=:id", (req, res) => {
    PostModel.findById(req.params.id, (err, data) => {
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.json(data);
    });
});

PostRouter.put('/?update=:id', (req,res) => {
    PostModel.findByIdAndUpdate(req.params.id, req.body ,(err, data)=> {
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.status(201).json({
            success: 1,
            message: "Data Ok"
        });
    });
});



PostRouter.delete('/?delete=:id',(req,res)=>{
    PostModel.findByIdAndDelete(req.params.id, req.body ,(err, data)=> {
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.status(201).json({
            success: 1,
            message: "Data Del Ok"
        });
    });
});
module.exports = PostRouter;