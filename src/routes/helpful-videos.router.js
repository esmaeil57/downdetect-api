const express = require('express');
const router = express.Router();
const controller = require('../controller/helpful-videos.controller');
const adminMiddleware = require('../middlewares/admin-middleware');

// Admin-Only Routes
router.post('/', adminMiddleware, controller.createVideo);
router.put('/:id', adminMiddleware, controller.updateVideo);
router.delete('/:id', adminMiddleware, controller.deleteVideo);

// Public Routes
router.get('/', controller.getAllVideos);
router.get('/:id', controller.getVideoById);

module.exports = router;