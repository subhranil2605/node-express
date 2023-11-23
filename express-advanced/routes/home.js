const express = require('express');
const router = express.Router();

// Route for homepage
router.get('/', (req, res) => {
    res.send('<h1>Hello Subhranil Sarkar!!!</h1>');
});

module.exports = router;
