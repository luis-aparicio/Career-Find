const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    exampleRouter = require('../routes/examples.server.routes');
const { auth } = require("express-openid-connect");


module.exports.init = () => {
    /* 
        connect to database
        - reference README for db uri
    */
    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(bodyParser.json());
    // auth router attaches /login, /logout, and /callback routes to the baseURL
    app.use(auth(require('./config').auth));
    // req.isAuthenticated is provided from the auth router
    app.get("/", (req, res) => {
        res.send(req.isAuthenticated() ? "Logged in" : "Logged out");
    });

    // add a router
    app.use('/api/example', exampleRouter);

    const { requiresAuth } = require('express-openid-connect');

    app.get('/profile', requiresAuth(), (req, res) => {
        res.send(JSON.stringify(req.openid.user));
    });

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

