var config = require('../config/config'),
    route = require('express').Router(),
    Sequelize = require('sequelize'),
    amsDb = new Sequelize('ams', config.mysql.user, config.mysql.password),
    todosDb = new Sequelize('todos', config.mysql.user, config.mysql.password),
    Mogul = amsDb.import('../models/mogul'),
    Todos = todosDb.import('../models/todos');




route.get('/init', function(req,res){
    "use strict";
    Mogul.sync({force: true});
    Todos.sync({force: true});
    res.send('OK');
});

route.get('/populate',function(req,res){
    res.send('fill with data');
});

module.exports = route;