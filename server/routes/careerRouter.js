const career = require('../controllers/careerController');
const express = require('express');

const careerRouter = express.Router();

careerRouter.route('/:career').post(career.fill);
careerRouter.route('/:career').get(career.get);


module.exports = careerRouter;


