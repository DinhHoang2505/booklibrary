const express = require('express');
const router = express.Router();

const booksController = require('.././app/controller/BooksController')

router.get('/create', booksController.create)
router.get('/:slug', booksController.show)
router.get('/', booksController.index)

module.exports = router;