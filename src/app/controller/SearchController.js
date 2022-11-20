class SearchController {

    //[GET] /news
    index(req,res,next) {
        res.render('search')
    }
}

module.exports = new SearchController