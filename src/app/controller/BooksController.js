const Book = require('../models/Book');
const { multipleMongooseToObject, mongooseToObject } = require('../../ulti/mongoose');
const formatter = require('../../ulti/formatMoney')
const sliceString = require('../../ulti/sliceString')
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

    // [POST] /books/store
    store(req, res, next) {
        const book = new Book(req.body);
        book.save((err) => {
            if (err) { return next(err); }
            res.redirect('/books')
        })
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

    //[GET] /books/me
    me(req, res, next) {
        Book.find({})
            .then(books => {
                res.render('books/books-me', { books: multipleMongooseToObject(books) })
            }
            )
            .catch(next)
    }

    //[GET] /books/:id/edit
    edit(req, res, next) {
        Book.findById(req.params.id)
            .then(book => {
                res.render('books/edit', { book: mongooseToObject(book) })
            }
            )
            .catch(next)
    }

    //[PUT] /books/:id/update
    update(req, res, next) {
        Book.updateOne({ id: req.params._id }, req.body)
            .then(() => {
                res.redirect('/books/me')
            }
            )
            .catch(next)
    }

    //[DELETE] /books/:id/delete
    destroy(req, res, next) {
        Book.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('back')
            }
            )
            .catch(next)
    }


}

module.exports = new BooksController