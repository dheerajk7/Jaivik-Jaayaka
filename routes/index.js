const express = require('express');
const router = express.Router();

console.log("Router loaded");

//accessing home controller
var homeController = require('../controllers/home_controller');

//routes
router.get('/',homeController.home);

module.exports = router;