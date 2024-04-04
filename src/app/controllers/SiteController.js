class SiteController {
    index (req, res) {
        res.render('Site');
    }
    sreach (req, res) {
        res.sed('Site sreach');
    }
}

module.exports = new SiteController;