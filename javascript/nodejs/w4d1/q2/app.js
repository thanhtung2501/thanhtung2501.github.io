const express = require('express');
const path = require('path');
const parseurl = require('parseurl');
const session = require('express-session');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public', 'style')));
app.use(session({
    secret: 'session signing'
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/result', (req, res) => {
    req.session.person = {
        name: req.body.name,
        age: req.body.age
    };
    res.redirect('/output');
});

app.get('/output', (req, res) => {
    let person = req.session.person;
    let name = person.name;
    let age = person.age;
    res.send(`Welcome ${name} - ${age}`);
});

app.listen(3000, () => {
    console.log('w4d1 q2 is running');
});
