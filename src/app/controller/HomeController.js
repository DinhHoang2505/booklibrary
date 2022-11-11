class HomeController {

    //[GET] /news
    index(req,res,next) {
        res.render('home')
    }
}

module.exports = new HomeController