
const homeRouter = require("./home");
const booksController = require("./books");

function route(app) {
    app.use("/books", booksController)
    app.use("/", homeRouter)
}

module.exports = route;