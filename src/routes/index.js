
const homeRouter = require("./site");
const booksController = require("./books");

function route(app) {
    app.use("/books", booksController)
    app.use("/", homeRouter)
}

module.exports = route;