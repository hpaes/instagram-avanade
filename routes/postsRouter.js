const express = require('express');
const postsController = require('../controllers/postsController');
const router = express.Router();

// Posts
router.get('/', postsController.index);
router.get('/profile/:id', postsController.show);
router.post('/', postsController.create);
router.put('/:id', postsController.update);
router.delete('/:id', postsController.delete);

module.exports = router;
