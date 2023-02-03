const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/output', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    res.send(`Welcome ${name} ${age}`);
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.redirect(`/output?name=${name}&age=${age}`);
});

app.listen(3000, () => {
    console.log('q4 is running');
});