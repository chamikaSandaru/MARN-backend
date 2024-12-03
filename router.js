const express = require('express');
const router = express.Router();
const controller = require('./controller');
const { model } = require("mongoose");

router.get('/users', controller.getUsers);
router.post('/createuser', controller.addUser);
router.post('/deleteuser', controller.deleteUser);
router.post('/updateuser', controller.updateUser);

module.exports = router;