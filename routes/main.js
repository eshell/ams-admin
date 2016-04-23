var config = require('../config/config'),
    route = require('express').Router(),
    Sequelize = require('sequelize'),
    amsDb = new Sequelize('ams', config.mysql.user, config.mysql.password),
    todosDb = new Sequelize('todos', config.mysql.user, config.mysql.password),
    error_logDb = new Sequelize('error_log', config.mysql.user, config.mysql.password),
    Mogul = amsDb.import('../models/mogul'),
    Errors = error_logDb.import('../models/error_log'),
    Todos = todosDb.import('../models/todos');



route.get('/',function(req,res){
    res.send('admin');
});

route.get('/init-all', function(req,res){
    "use strict";
    Mogul.sync({force: true});
    Todos.sync({force: true});
    Errors.sync({force:true});
    res.send('OK');
});
route.get('/populate-all',function(req,res){
    res.send('fill with data');
});


route.get('/init-moguls',function(req,res){
    "use strict";
    Mogul.sync({force: true});
    res.send('OK');
    
});
route.get('/init-todos',function(req,res){
    "use strict";
    Todos.sync({force: true});
    res.send('OK');

});
route.get('/init-error_log',function(req,res){
    "use strict";
    Errors.sync({force: true});
    res.send('OK');

});


module.exports = route;