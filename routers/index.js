const express = require('express');
const router = express.Router();
homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.post('/task',homeController.tasks);


module.exports = router
