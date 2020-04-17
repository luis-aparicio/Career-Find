const career = require('../controllers/careerController');
const express = require('express');

const careerRouter = express.Router();

careerRouter.route('/:career').post(career.fill);

module.exports = careerRouter;


