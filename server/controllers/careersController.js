const mongoose = require("mongoose");
const Career = require('../models/CareerModel');
const axios = require('axios');
const queryString = require('query-string');
const config = require('/config/config.js');


const getCareer = (req, res, next) => {

}





import config from '../config/config.js';
import request from 'request';

export default (req, res, next) => {
    if (req.body.address) {
        const addressTemp = req.body.address.toLowerCase().replace(/\s/g, "%20").replace(/,/g, "%2C");

        // Setup your options q and key are provided. Feel free to add others to make the JSON response less verbose and easier to read
        const options = {
            q: addressTemp,
            key: config.openCage.key,
        };

        // The below code makes a GET request to the specified URL.
        request({
            uri: 'api.careeronestop.org/v1/occupation/n',
            'content-type': 'application/json'
            'authorization': config.careerAPI.
            qs: options
        }, async (error, response, body) => {
            // For ideas about response and error processing see https://opencagedata.com/tutorials/geocode-in-nodejs

            /* Save the coordinates in req.results -> this information will be accessed by listingsController.js to add the coordinates to the Listing to be saved in the database.
              To access the coordinates, you can JSON.parse(body) and find which attribute(s) store some sort of latitude and longitude coordinate pair.
              Make SURE to store in req.results.
            */
            next();
        });
    } else {
        next();
    }
};  

// Creating new user
exports.initialLoad = (req, res) => {
  const params = "/US?training=false"+
                  "&interest=false"+"&videos=false" +
                  "&tasks=false" + "&dwas=false" + 
                  "&wages=true" + "&alternateOnetTitles=true" +
                  "&projectedEmployment=true" + "&ooh=false" + 
                  "&stateLMILinks=false" + "&relatedOnetTitles=true" + 
                  "&skills=true" + "&knowledge=true" + 
                  "&ability=true" + "&trainingPrograms=true";
  const options = {
    q: params,
    key: config.CareerAPI.key,
    userId: 
};
  const query = queryString.stringify(config.careerAPI, options);
  const tempCareers = [19101100, 19204101, 19202100, 19101300, 19102300, 19102200, 15113100, 15119911,
      15112100, 15113400, 15114200, 15114100, 47211100, 49301100, 47401100, 47218100, 47207300, 47101103,
      29203100, 29117100, 29106904, 29106700, 29106400, 29102300, 23101100, 43405100, 21102100, 21101400,
      21109300, 21101500, 13201101, 13202102, 13107100, 13209902, 11202100, 11902100];
  
  for(let it in tempCareers)
  {
      
  }
  
  axios.get('api.careeronestop.org/v1/occupation/', query);
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });
          
}

