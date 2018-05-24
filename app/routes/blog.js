import express from 'express';
const router = express.Router();

router.get('/blog', function(req, res) {
    const articles = req.app.get('blogData').articles;
    res.render('blog', {
        pageTitle: "Blog",
        pageID: "blog",
        articles
    });
});

module.exports = router;