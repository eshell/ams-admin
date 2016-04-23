var express = require('express'),
    config = require('./config/config'),
    http = require('http'),
    app = express();
// faker = require('faker'),
// md5 = require('md5'),
// _ = require('lodash'),
// morgan = require('morgan'),

app.use('/',require("./routes/main"));


http.createServer(app).listen(config.port, function (err) {
    console.log('AMS API Server listening on port '+config.port);
});
