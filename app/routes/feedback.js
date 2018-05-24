import express from 'express';
const router = express.Router();

router.get('/feedback', function(req, res) {
    const articles = req.app.get('blogData').articles;
    res.render('feedback', {
        pageTitle: "Feedback",
        pageID: "feedback",
        articles
    });
});

module.exports = router;