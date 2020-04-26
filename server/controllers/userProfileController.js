const mongoose = require("mongoose");
const User = require('../models/UserModel');
exports.update = async(req, res) => {
    let user;
    const property = req.body.property;
    const content = req.body.content;
    let changeProp = {}
    user = await User.findOne({username: req.body.username});
    if(user & property & content){
        changeProp[property] = content;
        await Person.updateOne({}, changeProp);
    res.status(200).send(content);
    }
}