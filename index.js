//Add and connect library
const express = require('express');
const app = express();

//Configuration
app.use(express.static('public'));
app.set('view engine', 'ejs');

//
app.get('/', (req, res) => {
    res.render('main')
})
app.get('/profile', (req, res) => {
    res.render('profile')
})
app.get('/detailBlog', (req, res) => {
    res.render('detailBlog')
})
app.get('/newblog', (req, res) => {
    res.render('newBlog')
})
app.get('/editblog', (req, res) => {
    res.render('editBlog')
})
app.get('/login', (req, res) => {
    res.render('logIn')
})
app.get('/registration', (req, res) => {
    res.render('registration')
})

//Connect port
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Sever work on port ${PORT}`);
})