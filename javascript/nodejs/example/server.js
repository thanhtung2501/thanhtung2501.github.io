const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const bookRoutes = require('./bookrouter');

const app = express();

app.use(bodyparser.urlencoded({
    extended: false
}));

app.use(express.json());

app.use('/pics', express.static(path.join(__dirname, "public", "/images")));
app.use('/css', express.static(path.join(__dirname, "public", "style")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'view'));

// get route from other files
app.use('/book', bookRoutes);

// define middleware
// app.use((req, res, next) => {
//     console.log(req.url);
//     next(); // call next page 
// });


// // routes
// app.get('/', (req, res) => {
//     res.send('Home');
    
// })

app.get('/dog', (req, res) => {
    res.send('Dog page');
})

app.get('/chicken', (req, res) => {
    let item = 'this is the page 1';
    res.render('page1', {title: item});
})

app.listen(3000, () => {
    console.log('server with express ....');
});
