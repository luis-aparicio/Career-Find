const user = require('../controllers/usersController.js')
const userProfile = require('../controllers/userProfileController.js')
express = require('express'), 
router = express.Router()

router.route('/').post(user.create);
router.route('/:login').post(user.login);
router.route('/profile/:update').post(userProfile.update);
router.route('/profile/:value').get(userProfile.getValue);
  
module.exports = router;