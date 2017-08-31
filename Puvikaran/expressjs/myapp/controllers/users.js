var db = require('../models/db');

function userInfo(req, res) {

    var sql = "SELECT * from users";
    db.query(sql, function(err, results) {
        if (err) throw err
        console.log('Table Fetch Success');

        res.render('../views/users', {
            title: 'Users List',
            results: results
        });
    });

}

function userInfoId(req, res) {

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

}

function addUser(req, res) {
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


}

function editUser(req, res) {

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
}

function saveUser(req, res) {
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
}

function deleteUserDetails(req, res) {

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

}

function deleteUser(req, res) {
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

}

// module.exports = {
//     userInfo: userInfo,
//     userInfoId: userInfoId,
//     addUser: addUser,
//     editUser: editUser,
//     saveUser: saveUser,
//     deleteUserDetails: deleteUserDetails,
//     deleteUser: deleteUser
// };
