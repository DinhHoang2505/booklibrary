const express = require('express');
const router = express.Router();

const booksController = require('.././app/controller/BooksController')

router.get('/create', booksController.create)
router.post('/store', booksController.store)
router.get('/me', booksController.me)
router.get('/:id/edit', booksController.edit)
router.put('/:id/update', booksController.update)
router.delete('/:id/delete', booksController.destroy)
router.get('/:slug', booksController.show)
router.get('/', booksController.index)

module.exports = router;