const express = require('express');
const router = express.Router();
const Categories = require('../Categories/Categories');
const Blog = require('../Blog/Blog')

router.get('/', async(req, res) => {
    const allCategories = await Categories.find();
    res.render('main', {categories: allCategories, user: req.user ? req.user : {}});
})
router.get('/profile/:id', async(req, res) => {
    const blogs = await Blog.find();
    res.render('profile', { blogs: blogs, user: req.user ? req.user : {}})
})
router.get('/detailBlog/:id', async(req, res) => {
    const allCategories = await Categories.find();
    res.render('detailBlog', {categories: allCategories, user: req.user ? req.user : {}});
})
router.get('/newblog', async(req, res) => {
    const allCategories = await Categories.find();
    res.render('newBlog', {categories: allCategories, user: req.user ? req.user : {}});
})
router.get('/edit', async(req, res) => {
    const allCategories = await Categories.find();
    res.render('editBlog', {categories: allCategories,user: req.user ? req.user : {}});
})
router.get('/login', (req, res) => {
    res.render('logIn', {user: req.user ? req.user : {}});
})
router.get('/register', (req, res) => {
    res.render('register', {user: req.user ? req.user : {}});
})
module.exports = router;