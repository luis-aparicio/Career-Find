import User from '../models/UserModel.js';
const bcrypt = require('bcrypt');

// Creating new user
router.post('/register', async(req, res) => {
    

    User.findOne({email: req.body.email})
    .then(user => {
        if(user){
            return res.status(400).json("Email already exists.")
        }
        
    });


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

            const newUser = new User(req.body);
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
            return;
        }
    })


});

router.post('/login', (req, res) =>{

})
