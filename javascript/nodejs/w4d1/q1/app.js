const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public', 'style')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        key: '',
        value: ''
    });
});

app.post('/addCookie', (req, res) => {
    res.cookie('key', req.body.key);
    res.cookie('value', req.body.value);
    res.render('index', {
        key: req.body.key,
        value: req.body.value
    });
});

app.listen(3000, () => {
    console.log('w4d1 is running');
});