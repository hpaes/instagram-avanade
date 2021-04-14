const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

// Middleware
const validateRegistry = require('../middlewares/ValidateRegistry');

// Usuario
router.get('/', usersController.index);
router.get('/profile/:id', usersController.show);
router.post('/', validateRegistry, usersController.create);
router.delete('/:id', usersController.delete);
router.put('/:id', usersController.update);

module.exports = router;
