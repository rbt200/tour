import express from 'express';
import feedback from "../data/feedback.json";
import bodyParser from 'body-parser';
import fs from 'fs';
const router = express.Router();


router.get('/api', function(req, res) {
    res.json(feedback);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended:false }));

router.post('/api', function(req, res) {
    feedback[req.body['target']].push(req.body);
    fs.writeFile('app/data/feedback.json', JSON.stringify(feedback), 'utf8', err => console.log(err))
    res.json(feedback);
});

// router.delete('/api', function(req, res) {
//     feedback[req.body['target']].push(req.body);
//     fs.writeFile('app/data/feedback.json', JSON.stringify(feedback), 'utf8', err => console.log(err))
//     res.json(feedback);
// });

module.exports = router;