var express = require('express');
var router = express.Router();
var ItemController = require('../controllers/itemController');

/* GET home page. */
router.get('/', ItemController.findAll)
router.get('/id/:id', ItemController.findOne)
router.get('/name/:name', ItemController.findByName)
module.exports = router;
