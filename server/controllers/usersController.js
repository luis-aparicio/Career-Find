const mongoose = require("mongoose");
const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const passport = require('passport');
//const jwt = require('jsonwebtoken');

const getHash = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
    //this needs error handling
}

// Creating new user
exports.create = async(req, res, next) => {
    let errString = "";

    let check = await User.findOne({email:req.body.email});
    if(check) errString = "Email already exists";
    check = null;

    check = await User.findOne({username: req.body.username});
    if(check) errString += "    Username already exists";
/*
    if (errString !== "") {
        res.status(200).send(errString);
    }else {
        const newUser = new User(req.body);
        bcrypt.genSalt(10, function(err,salt){
            bcrypt.hash(newUser.password, salt, function(err, hash){
                if (err){
                    throw err;
                }
                else{
                    newUser.password = hash;
                }
            })
        });
*/      
    const newUser = User(req.body);
    newUser.password = await getHash(newUser.password);
    //console.log(newUser.password);
    // Saving new user to the database
    await newUser.save(function(err){
        if(err){
            //console.log(err);
            res.status(200).send(err);
        }
        else{
            res.status(200).send("Success");
        }
    });

};

exports.login = async (req, res) =>{

    const password = req.body.password;
    let userExists = false;
    let passValid = false;
//console.log(req.body);
    let user = await User.findOne({username: req.body.username});
    if(user) {

        userExists = true;
    }
    passValid = await bcrypt.compare(req.body.password, user.password);

    //we have to set up a client key for our side first. lets put this off for later need private key
    //looks like we need to generate a secret key and store in config and pass this
    //let token = await jwt.sign({ id: user.username, name: user.name}, #secretHere, #algorithmHere);
    // let {token, err} = await jwt.sign({ id: user.username, name: user.name})
    /*if(err) {
    console.log(err);
        throw err;
    }*/


    //console.log(userExists);
    if(!userExists)
        res.status(200).send("Username not found!");
    else if(!passValid)
        res.status(200).send("Wrong Password!");
    else
        res.status(200).send("Success");


        /*passport.authenticate('local', function(err, user, info){
            console.log("hello!");
            if(err){
                throw err;
            }
            else if(info !== undefined){
                // Protecting user password
                user.password = undefined;
                user.salt = undefined;
                userExists = true;
            }

            if(!user){
                //userExists = false;
                //return res.status(404).json("Login failed, user does not exist.")
            }
            if(user)
                userExists = true;

console.log("pass = ");
console.log(password);
console.log(user.password);
            bcrypt.compare(password, user.password, function(err, isMatch){
                if(err){
                    throw err;
                }
                if (isMatch){
                    const payload = {
                        id: user.username,
                        name: user.name
                    };
                    jwt.sign(
                        payload,
                        (err, token) =>{
                            if(err){
                                throw err;
                            }
                            else{
                                console.log("hello!");
                                /*res.status(200).send({
                                    auth: true,
                                    token: token,
                                    message: "User logged in!"
                                });*//*
                                passValid = true;
                            }

                        }
                    );
                }
               // else{
                    //return res.status(400).json("Wrong Password.");
                //}
            })
        });*/
    //}
    //else{
        //return res.status(404).json({Error: "Username not found!"});
    //}

        
}

