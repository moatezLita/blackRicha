const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');

// Signup route
router.post('/signup', AuthController.signup);

// Login route
router.post('/login', AuthController.login);
router.post('/forgot-password', AuthController.forgotPassword);


module.exports = router;
