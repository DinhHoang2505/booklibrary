const Book = require('../models/Book')
class HomeController {

    //[GET] /
    index(req, res, next) {
        Book.find({})
            .then(books => {
                const bookParse = JSON.parse(JSON.stringify(books))
                res.render('home', { books: bookParse })
            }
            )
            .catch(next)
    }
}

module.exports = new HomeController