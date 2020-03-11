//import mongoose from 'mongoose';
const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: 'Please enter your first name!'
    },
    lastName:{
        type: String,
        required: 'Please enter yout last name'
    },
    username:{
        type: String,
        required: 'Please enter a username',
        unique: true,
        trim: true
    },
    email:{
        type: String,
        required: 'Please enter your email!',
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: 'Please enter your password!'
    },
    passwordConfirmation:{
        type: String,
        required: false
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("User", UserSchema);