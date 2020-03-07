import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true
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

export default mongoose.model('Users', UserSchema);