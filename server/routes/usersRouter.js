const user = require('../controllers/usersController.js'),
express = require('express'), 
router = express.Router()

router.route('/').post(user.create);
router.route('/:login').post(user.login);
  
module.exports = router;