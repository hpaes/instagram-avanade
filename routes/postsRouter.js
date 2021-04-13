const express = require('express');
const postsController = require('../controllers/postsController');
const router = express.Router();

// Posts
router.get('/', postsController.index);

module.exports = router;
