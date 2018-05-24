import express from 'express';
const router = express.Router();

router.get('/speakers', function(req, res) {   
    res.send(`
    <h1>List of artists:</h1>
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>        
    </ul>
    <script src="/reload/reload.js"></script>
    `);
});


module.exports = router;