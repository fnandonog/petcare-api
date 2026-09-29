const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const verifyToken = require('../helpers/verify-token');
const { registerValidation, loginValidation, validate } = require('../helpers/user-validator');

router.post('/register', registerValidation, validate, UserController.register);
router.post('/login', loginValidation, validate, UserController.login);

router.get('/perfil', verifyToken, UserController.getPerfil);

module.exports = router;