var express = require('express');
var router = express.Router();
var userController = require('../controllers/users');

router.get('/', userController.userInfo);

router.get('/new', function(req, res) {
    res.render('../views/adduser', {
        title: 'Add New User'
    });
});
router.post('/new', userController.addUser);

router.get('/:id', userController.userInfoId);

router.get('/:id/edit', userController.editUser);

router.post('/:id/edit', userController.saveUser);

router.get('/:id/delete', userController.deleteUserDetails);

router.post('/:id/delete', userController.deleteUser);


module.exports = router;
