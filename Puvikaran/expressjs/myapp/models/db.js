var express = require('express');
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "test_express"
});
pool.getConnection(function(err, connection) {
    if (err) throw err;
    console.log("Database Connected!");
    var sql = "SELECT * from users;";
    connection.query(sql, function(err, results) {
        connection.release();
        if (err) throw err;
        console.log("Table Fetched--->", results);
    });
});
module.exports = pool;