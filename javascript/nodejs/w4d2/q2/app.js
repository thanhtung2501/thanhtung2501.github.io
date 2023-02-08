const express = require('express');
const path = require('path');

const app = express();

const answers = require('./model/data');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'views', 'js')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/8ball', (req, res) => {
    let ans = answers[Math.floor(Math.random()*answers.length)];
    console.log(ans);
    res.json({ans: ans});
});

app.listen(3000);