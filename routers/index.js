const express = require('express');
const router = express.Router();
homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.post('/task',homeController.tasks);
router.get('/priority',homeController.priority);
router.get('/priority',homeController.priority);
router.post('/checkbox',homeController.checkbox);
router.get('/checkbox',homeController.checkbox);
router.get('/delete',homeController.delete);


module.exports = router
