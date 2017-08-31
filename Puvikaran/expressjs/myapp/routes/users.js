var express = require('express');
var router = express.Router();
var db = require('../models/db');

router.route('/')
  .get(function userInfo(req, res) {

    var sql = "SELECT * from users";
    db.query(sql, function(err, results) {
      if (err) throw err
      console.log('Table Fetch Success');

      res.render('../views/users', {
        title: 'Users List',
        results: results
      });
    });
  });
router.route('/new')
  .get(function(req, res) {
    res.render('../views/adduser', {
      title: 'Add New User'
    });
  })
  .post(function(req, res) {
    var data = {
      name: req.body.name,
      email: req.body.email,
      location: req.body.location
    };
    var sql = "INSERT INTO users SET ?;";
    db.query(sql, data, function(err, results) {
      if (err) throw err
      console.log('User added to the Database');
      res.render('../views/success', {
        title: 'New User',
        success: 'User added successfully'
      });
    });
  });
router.route('/:id')
  .get(function(req, res) {
    var idx = req.params.id;
    var sql = "SELECT * from users where id=?";
    db.query(sql, [idx], function(err, results) {
      if (err) throw err
      console.log('Table Fetch Success');
      res.render('../views/user', {
        title: 'User Details',
        results: results
      });
    });
  });
router.route('/:id/edit')
  .get(function(req, res) {
    var idx = req.params.id;
    var sql = "SELECT * from users where id=?";
    db.query(sql, [idx], function(err, results) {
      if (err) throw err
      console.log('Table Fetch Success');
      res.render('../views/edituser', {
        title: 'Edit User Details',
        id: results[0].id,
        name: results[0].name,
        email: results[0].email,
        location: results[0].location
      });
    });
  })
  .post(function(req, res) {
    var idx = req.params.id;
    var name = req.body.name;
    var email = req.body.email;
    var location = req.body.location;
    var sql = "UPDATE users SET name=?,email=?,location=? where id=?;";
    db.query(sql, [name, email, location, idx], function(err, results) {
      if (err) throw err
      console.log('User Details edited');
      res.render('../views/success', {
        title: 'User Details',
        success: 'User edited successfully'
      });
    });
  });
router.route('/:id/delete')
  .get(function(req, res) {
    var idx = req.params.id;
    var sql = "SELECT * from users where id=?";
    db.query(sql, [idx], function(err, results) {
      if (err) throw err
      console.log('Table Fetch Success', results);
      res.render('../views/deleteuser', {
        title: 'Delete User Details',
        id: results[0].id,
        name: results[0].name,
        email: results[0].email,
        location: results[0].location

      });
    });
  })
  .post(function(req, res) {
    var idx = req.params.id;
    var sql = "DELETE from users where id=?;";
    db.query(sql, [idx], function(err, results) {
      if (err) throw err
      console.log('User Details deleted');
      res.render('../views/success', {
        title: 'User Details',
        success: 'User deleted successfully'
      });
    });
  });


module.exports = router;
