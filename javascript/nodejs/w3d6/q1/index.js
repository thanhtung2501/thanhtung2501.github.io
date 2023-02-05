const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    const date = new Date();
    const currentTime = date.getHours();

    res.render('index', {
        time: date.toDateString(),
        hour: currentTime
    });
});

app.listen(3000, () => {
    console.log('q1 is running');
});