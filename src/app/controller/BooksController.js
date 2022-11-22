const Book = require('../models/Book');
const { multipleMongooseToObject, mongooseToObject } = require('../../ulti/mongoose');
const formatter = require('../../ulti/formatMoney')
class BooksController {
    //[GET] /books
    index(req, res, next) {
        Book.find({})
            .then(books => {
                // const bookParse = JSON.parse(JSON.stringify(books))
                res.render('books/books', { books: multipleMongooseToObject(books) })
            }
            )
            .catch(next)
    }
    // [GET] /books/create
    create(req, res, next) {
        res.render('books/createbook')
    }
    //[GET] /books/:slug
    show(req, res, next) {
        Book.findOne({ slug: req.params.slug })
            .then(book => {
                book = mongooseToObject(book)
                res.render('books/slugbook', { book: { ...book, price: formatter.format(book.price) } })
            }
            )
            .catch(next)
    }
}

module.exports = new BooksController