class NewController {

    //[GET] /news
    index(req,res,next) {
        res.render('news')
    }

    //[GET] /news/:slug
    show(req,res,next) {
        res.send('slug')
    }
    
    // [GET] /news/:slug/2
    show2 (req,res,next) {
        res.send('slug 2')
    }
}

module.exports = new NewController