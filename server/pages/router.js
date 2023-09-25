const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('main')
})
router.get('/profile', (req, res) => {
    res.render('profile')
})
router.get('/detailBlog', (req, res) => {
    res.render('detailBlog')
})
router.get('/newblog', (req, res) => {
    res.render('newBlog')
})
router.get('/editblog', (req, res) => {
    res.render('editBlog')
})
router.get('/login', (req, res) => {
    res.render('logIn')
})
router.get('/registration', (req, res) => {
    res.render('registration')
})