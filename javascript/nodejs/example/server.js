const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const bookRoutes = require('./bookrouter');

const app = express();

app.use(bodyparser.urlencoded({
    extended: false
}));

app.use(express.json());

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

// app.get('/dog', (req, res) => {
//     res.send('Dog page');
    
// })

app.get('/chicken', (req, res) => {
    res.send('Chicken page');
})

app.listen(3000, () => {
    console.log('server with express ....');
});
