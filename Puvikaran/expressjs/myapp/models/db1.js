var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test_express"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
    // var sql = "CREATE TABLE users (id int(10) NOT NULL,name varchar(250) NOT NULL,email varchar(250) NOT NULL,location varchar(250) NOT NULL,created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)ENGINE=InnoDB DEFAULT CHARSET=latin1;";
    //var sql = "ALTER TABLE users ADD PRIMARY KEY (id);";
    // var sql = "ALTER TABLE users MODIFY id int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;";
    // connection.query(sql, function(err, result) {
    //     if (err) throw err;
    //     console.log("Table Altered");
    // });
});
module.exports = connection;