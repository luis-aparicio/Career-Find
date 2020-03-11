//import User from '../models/UserModel.js';
const mongoose = require("mongoose");
const User = require('../models/UserModel');
const passport = require ("passport");


// Creating new user
exports.create = /*async*/(req, res) => {


    User.findOne({email: req.body.email})
    .then(user => {
        if(user){
            return res.status(400).json("Email already exists.")
        }

    });

    const newUser = new User(req.body);

    User.findOne({username: req.body.username})
    .then(user =>{
        //check if username is unique
        if (username){
            return res.status(400).json("Username already exist.")
        }
        //check if password match
        else if (req.body.password !== req.body.passwordConfirmation){
                return res.status(200).send('error: Password doest not match.')
        } else{
            // Hashing password for saving
            bcrypt.genSalt(10, function(err,salt){
                bcrypt.hash(req.body.password, salt, function(err, hash){
                    if (err){
                        throw err;
                    }
                    else{
                        req.body.password = hash;
                    }
                })
            })

        }
    });



    // Saving new user to the database
    newUser.save(function(err){
        if(err){
            console.log(err);
            res.status(200).send(err);
        }
        else{
            res.send(user);
        }
    })


};

exports.login = (req, res) =>{

    const inputUsername = req.body.username;
    const inputPassword = req.body.password;

    User.findOne({username : inputUsername}).then(user => {
        passport.authenticate('local', function(err, user, info){

            if(err){
                throw err;
            }
            else if(info !== undefined){
                // Protecting user password
                user.password = undefined;
                user.salt = undefined;
            }

            if(!user){
                return res.status(404).json("Login failed, user does not exist.")
            }


            bcrypt.compare(inputPassword, user.password, function(err, isMatch){
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
                                res.status(200).send({
                                    auth: true,
                                    token: token,
                                    message: "User logged in!"
                                });
                            }
                            
                        }
                    );
                }
                else{
                    return res.status(400).json("Wrong Password.");
                }
            })
        })(req, res, next);
        
    })
}

