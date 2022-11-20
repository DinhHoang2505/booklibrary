class PostnewsController {

    //[GET] /news
    index(req,res,next) {
        res.render('postnews')
    }
}

module.exports = new PostnewsController