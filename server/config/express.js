const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    //exampleRouter = require('../routes/examples.server.routes'),
    usersRouter = require('../routes/usersRouter');
    careerRouter = require('../routes/careerRouter');

module.exports.init = () => {
    /* 
        connect to database
        - reference README for db uri
    */
    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("Successfully connected to mongoose database!"));

    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(bodyParser.json());

    // add a router
    //app.use('/api/example', exampleRouter);
    app.use('/api/user', usersRouter);
    app.use('/api/career', careerRouter);

    // Using passport
    app.use(passport.initialize());
    app.use(passport.session());

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
}

