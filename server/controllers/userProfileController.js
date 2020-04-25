const mongoose = require("mongoose");
const User = require('../models/UserModel');

/*Controller updates and retrieves properties of UserModel*/

exports.update = async(req, res) => {
    /*req format-
        body.username,
        body.property, - name of property in username to change
        body.content, -value you want this property to be
    res format - 
        returns new value if successfully set
        else returns ERROR with specific info to error*/
    
    let user;
    const props = req.body.property;
    const contents = req.body.content;

    let changeProp = {}

    user = await User.findOne({username: req.body.username});
    console.log('contents'+ contents);
    if(user && props && contents){
        changeProp[props] = contents;   //this creates the {name: value} pair
        
        await user.updateOne(changeProp);

        res.status(200).send(user[props]);
        console.log('contents'+ contents);
    }
    else {
        if(!user)
            res.status(200).send("ERROR-USER NOT FOUND");
        else if(!props)
            res.status(200).send("ERROR-PROPERTY_NAME");
        else if(!contents)
            res.status(200).send("ERROR-CONTENTS");
        else
            res.status(200).send("ERROR-generic");
    }
}

exports.getValue = async(req, res) => {
    /*req format-
        body.username,
        body.property, - name of property in username to lookup
    res format - 
        returns  value if found
        else returns ERROR with specific info to error*/
    
        let user, contents;
        const props = req.body.property;
    
        user = await User.findOne({username: req.body.username});

        if(user && props){

            contents = user[props];   //get value of that property
            if(contents)
                res.status(200).send(contents);
            else
                res.status(200).send("ERROR-VALUE NOT FOUND");
        } else {
            if(!user)
                res.status(200).send("ERROR-USER NOT FOUND");
            else if(!props)
                res.status(200).send("ERROR-PROPERTY_NAME");
            else
                res.status(200).send("ERROR-generic");
        }
}