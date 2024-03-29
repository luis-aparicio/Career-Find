//import mongoose from 'mongoose';
const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({
    isAdmin:{
        type: Boolean,
        default: false
    },
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
    date:{
        type: Date,
        default: Date.now
    },
    points:{
        type:Number,
        default: 0
    },
    favorites:[
        {
            type: String
        }
    ],
    avatar:{
        type:String,
        default:""
    },
    avatarHead:{
        type:String,
        default:""
    },
    maleCloset:[
        {
            type: Number
        }
    ],
    femaleCloset:[
        {
            type:Number
        }
    ],
    aboutMe:{
        type: String,
        default:""
    },
    students:[
        {
            username:String
        }
    ]
});

module.exports = User = mongoose.model("User", UserSchema);