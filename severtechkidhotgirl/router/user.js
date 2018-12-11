const express = require("express");
const UserRouter = express.Router();

const UserModels = require("../models/user")

//TODO: CRUD for user
//"/api/user"
UserRouter.post("/", (req, res) => {
    const newUser = req.body;
    UserModels.create(newUser, (err, userCreated) =>{
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.status(201).json({
            success: 1,
            message: "Creat Success"
        })
    });
});

// Get all
UserRouter.get("/", (req, res) => {
    UserModels.find({}, (err, data) =>{
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.json(data);
    });
}); 

//Get by id
UserRouter.get("/?id=:id", (req, res) => {
    UserModels.findById(req.params.id, (err, data) => {
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.json(data);
    });
});

UserRouter.put('/?update=:id', (req,res) => {
    UserModel.findByIdAndUpdate(req.params.id, req.body ,(err, data)=> {
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.status(201).json({
            success: 1,
            message: "Data Update Ok"
        });
    });
});

UserRouter.delete('/?delete=:id',(req,res)=>{
    UserModel.findByIdAndDelete(req.params.id, (err, data) =>{
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.status(201).json({
            success: 1,
            message: "Data Del Ok"
        });
    })
})
module.exports = UserRouter;