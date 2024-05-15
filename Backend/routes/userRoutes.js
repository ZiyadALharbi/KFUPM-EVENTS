const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route handler for user registration
router.post('/register', userController.register);

// Route handler for user login
router.post('/login', userController.login);

router.get("/user",userController.getuserinfo);

module.exports = router;
