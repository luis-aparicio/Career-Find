const express = require('./config/express.js');
const passport = require('./config/passport');
 
// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()
app.listen(port, () => console.log(`Server now running on port ${port}!`));
//app.use(passport.initialize());
//require('./config/passport')(passport);