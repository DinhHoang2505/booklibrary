const express = require('express');
const router = express.Router();
const homeController = require('../app/controller/HomeController')
const searchController = require('../app/controller/SearchController')
const postnewsController = require('../app/controller/PostnewsController')

router.use('/postnews',postnewsController.index)
router.use('/search',searchController.index)
router.use('/',homeController.index)

module.exports = router;