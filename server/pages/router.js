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
router.get('/newblog', async(req, res) => {
    const allCategories = await Categories.find();
    res.render('newBlog', {categories: allCategories});
})
router.get('/editblog', async(req, res) => {
    const allCategories = await Categories.find();
    res.render('editBlog', {categories: allCategories});
})
router.get('/login', (req, res) => {
    res.render('logIn');
})
router.get('/register', (req, res) => {
    res.render('register');
})
module.exports = router;