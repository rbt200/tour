import express from 'express';
const router = express.Router();

router.get('/', function(req, res) {
	const data = req.app.get('appData');
	const photos = data.pages[0].img;

	res.render('index',{
		pageTitle: "Home",
		pageID: "home",
		pageImg: photos
	});
});

module.exports = router;