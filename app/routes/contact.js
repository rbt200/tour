import express from 'express';
const router = express.Router();

router.get('/contact', function(req, res) {
    res.render('contact', {
        pageTitle: "Contact",
		pageID: "contact"
    });
});

module.exports = router;