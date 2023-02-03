const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('<form action="/result" method="post"><label>Name<input type="text" name="name"></label><label>Age<input type="text" name="age"></label><input type="submit" name="Submit Query"></form>');
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;

    if (!name) {
        name = 'person';
    }

    if (!age) {
        age = 20;
    }

    res.send(`Welcome ${name} ${age}`);
});

app.listen(3000, () => {
    console.log('q2 is running');
});