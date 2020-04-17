//'use strict'
const mongoose = require ("mongoose");
const fs = require("fs");
const Career =require( '../models/CareerModel');
const config = require ('../config/config');
const async = require ('async');


exports.fill = () =>{
    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});

    Career.deleteMany({}, (err) =>{
        if (err){
            throw err;
        }
    });


    fs.readFile('careers.json', 'utf8', (err, data) =>{
        if (err){
            throw err;
        }
        let careersData = JSON.parse(data);
       // console.log(data);

        async.forEach(careersData.OccupationDetail, (doc, callback) => {
            Career.create(doc, (err) =>{
                if (err){
                    throw err;
                }
                
                console.log(careersData);
                callback();
                return;
            }); 
        }, () =>{
            mongoose.connection.close();
        });
    })
}


exports.create = async (req, res) =>{
    let career = new Career(req.body);
    await clearAndRefill();
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



