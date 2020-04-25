//'use strict'
const mongoose = require ("mongoose");
const fs = require("fs");
const Career =require( '../models/CareerModel');
const config = require ('../config/config');
const async = require ('async');


exports.fill = () =>{
    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});

 

    fs.readFile('careers.json', 'utf8', (err, data) =>{
        if (err){
            throw err;
        }
        let careersData = JSON.parse(data);

        async.forEach(careersData.OccupationDetail, (doc, callback) => {
            Career.create(doc, (err) =>{
                if (err){
                    throw err;
                }
                
                //console.log(careersData);
                callback();
                return;
            }); 
        }, () =>{
            mongoose.connection.close();
        });
    })
}

// Creating new career
exports.create = async (req, res) =>{
    let career = new Career(req.body);
    
    career.save(function(err){
        if (err){
            throw err;
        }
        else{
            res.send(career);
            console.log(career);
            return;
        }
    })
};

exports.get = async (req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    Career.find({}, function(err, allCareers) {
        if (err){
            throw err;
        }
        else{
            res.send(allCareers);  
            //console.log(allCareers);
            return;
        }
        
      });
   
};

exports.update = (req, res) =>{
    const career = req.career;

    Career.findOneAndUpdate(career, req.body, {new: true}, function(err, career){
        if (err){
            throw err;
        }
        else{
            res.send(career);
        }
    })
}
// Deleting the whole database
exports.delete = async(req ,res) =>{

    Career.deleteMany({}, (err) =>{
        if (err){
            throw err;
        }
    });

}

