const mongoose = require("mongoose");
const User = require('../models/UserModel');
const userController = require('./usersController.js')


exports.newStudent = async(req, res) => {
    /*req format-
        body.adminname,
        body.userinfo, -everything needed for usersController create in one object
    res format - 
        returns SUCCESS if successfully set
        else returns ERROR with specific info to error*/
        
    let admin = await User.findOne({username: req.body.adminname});
    if(admin.isAdmin){
        let response = await userController.create(req.body.userinfo, res);
        if(response === "Success"){
            admin.students.push(req.body.userinfo.username);
            res.sendStatus(200).send("Success");
        } else {
            res.sendStatus(200).send("ERROR-COULD NOT SAVE NEW STUDENT");
        }
    } else {
        res.sendStatus(200).send("ERROR-NOT AN ADMIN");
    }
}

exports.getStudent = async(req, res) => {
    /*req format-
        body.adminname,
    res format - 
        returns  students
        else returns ERROR with specific info to error*/
    
        let user, contents;
        const props = req.body.property;
        let admin = await User.findOne({username: req.body.adminname});
        if(admin){
            if(admin.isAdmin){
                res.sendStatus(200).send(admin.students);
            }else
                res.sendStatus(200).send("ERROR-NOT AN ADMIN");
        } else
            res.sendStatus(200).send("ERROR-COULD NOT SAVE NEW STUDENT");
}