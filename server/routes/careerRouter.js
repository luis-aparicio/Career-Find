const career = require('../controllers/careerController');
const express = require('express');

const careerRouter = express.Router();

careerRouter.route('/:career').post(career.fill);
careerRouter.route('/:career').get(career.get);
careerRouter.route('/career/new').post(career.create);


module.exports = careerRouter;


