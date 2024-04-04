class NewsController {
    index (req, res) {
        res.render('NEWS');
    }
    show (req, res) {
        res.sed('NEWS detail');
    }
}

module.exports = new NewsController;