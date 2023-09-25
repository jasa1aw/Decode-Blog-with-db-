const express = require('express');
const router = express.Router();
const Categories = require('../Categories/Categories');

router.get('/', async(req, res) => {
    const allCategories = await Categories.find();
    res.render('main', {categories: allCategories});
})
router.get('/profile', (req, res) => {
    res.render('profile')
})
router.get('/detailBlog', async(req, res) => {
    const allCategories = await Categories.find();
    res.render('detailBlog', {categories: allCategories});
})
router.get('/newblog', (req, res) => {
    res.render('newBlog');
})
router.get('/editblog', (req, res) => {
    res.render('editBlog');
})
router.get('/login', (req, res) => {
    res.render('logIn');
})
router.get('/registration', (req, res) => {
    res.render('register');
})
module.exports = router;