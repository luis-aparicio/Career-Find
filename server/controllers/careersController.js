const mongoose = require("mongoose");
const Career = require('../models/CareerModel');
const axios = require('axios');
const queryString = require('query-string');
const config = require('/config/config.js');


// Creating new user
exports.list = async(req, res) => {
    const query = queryString.stringify(config.careerAPI);
    const tempCareers = [19101100, 19204101, 19202100, 19101300, 19102300, 19102200, 15113100, 15119911,
        15112100, 15113400, 15114200, 15114100, 47211100, 49301100, 47401100, 47218100, 47207300, 47101103,
        29203100, 29117100, 29106904, 29106700, 29106400, 29102300, 23101100, 43405100, 21102100, 21101400,
        21109300, 21101500, 13201101, 13202102, 13107100, 13209902, 11202100, 11902100];
    
    axios.get('api.careeronestop.org/v1/occupation/')
    .then(response => {
      console.log(response.data.url);
      console.log(response.data.explanation);
    })
    .catch(error => {
      console.log(error);
    });
          
}

