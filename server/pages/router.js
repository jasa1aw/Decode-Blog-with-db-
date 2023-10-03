const express = require('express');
const router = express.Router();
const Categories = require('../Categories/Categories');
const NewBlog = require('../NewBlog/NewBlog')

router.get('/', async(req, res) => {
    const allCategories = await Categories.find();
    res.render('main', {categories: allCategories, user: req.user ? req.user : {}});
})
router.get('/profile/:id', (req, res) => {
    res.render('profile', {user: req.user ? req.user : {}})
})
router.get('/detailBlog/:id', async(req, res) => {
    const allCategories = await Categories.find();
    const createBlog = await NewBlog.find();
    res.render('detailBlog', {categories: allCategories, newBlogs: createBlog, user: req.user ? req.user : {}});
})
router.get('/newblog', async(req, res) => {
    const allCategories = await Categories.find();
    res.render('newBlog', {categories: allCategories, user: req.user ? req.user : {}});
})
router.get('/edit/:id', async(req, res) => {
    const allCategories = await Categories.find();
    const createBlog = await NewBlog.find();
    res.render('editBlog', {categories: allCategories, newBlogs: createBlog,user: req.user ? req.user : {}});
})
router.get('/login', (req, res) => {
    res.render('logIn', {user: req.user ? req.user : {}});
})
router.get('/register', (req, res) => {
    res.render('register', {user: req.user ? req.user : {}});
})
module.exports = router;