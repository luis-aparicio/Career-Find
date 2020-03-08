const express = require('./config/express.js')

const https = require('https');
const fs = require('fs');

const key = fs.readFileSync('./localhost-key.pem');
const cert = fs.readFileSync('./localhost.pem');
 
// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()

https.createServer({key, cert}, app).listen(port, () => {
    console.log(`Listening on https://localhost:${port}!`);
});
//app.listen(port, () => console.log(`Server now running on port ${port}!`));
