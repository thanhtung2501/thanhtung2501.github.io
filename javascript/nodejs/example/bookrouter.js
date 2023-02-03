const express = require('express');

const router = express.Router();

// optinal
router.use((req, res, next) => {
    console.log(req.url);
    next(); // call next page 
});

router.get('/', (req, res) => {
    res.send('main bookr page');
})

router.get('/book1', (req, res) => {
    res.send('bestseller page');
})

router.get('/book2', (req, res) => {
    res.send('book2 page');
})

router.get('/book3', (req, res) => {
    res.send('book3 page');
})

module.exports = router;