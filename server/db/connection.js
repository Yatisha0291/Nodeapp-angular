var mysql = require('mysql');

var connection = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: 'orcl',
    database: 'world'
});

module.exports = connection;