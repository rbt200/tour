import express from "express";
const router = express.Router();

router.get("/login", function(req, res) {
    res.send(`
    <h1>Login Page</h1>
    <script src="/reload/reload.js"></script>
    `);
});

module.exports = router;