const career = require('../controllers/careersController.js'),
    express = require('express'), 
    careersRouter = express.Router()

careersRouter.route('/all').get(career.list);
careersRouter.route('/keyword').get(career.kwSearch);
careersRouter.route('/load').put(career.loadCareers);
  
module.exports = careersRouter;