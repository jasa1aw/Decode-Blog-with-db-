const express = require('express');
const router = express.Router();
const Categories = require('../Categories/Categories');
const Blog = require('../Blog/Blog');
const Comment = require('../Comments/Comments');

router.get('/', async(req, res) => {
    // console.log(req.query);
    const options = {};
    const categories = await Categories.findOne({key: req.query.category})
    if(categories){
        options.category = categories._id;
        res.locals.category = req.query.category;
    }
    if(req.query.search && req.query.search.length > 0){
        options.$or = [
            {
                title: new RegExp(req.query.search, 'i')
            },
            {
                description: new RegExp(req.query.search, 'i')
            }
        ]
        res.locals.search = req.query.search;
    }
    let page = 0;
    const limit = 3;
    if(req.query.page && req.query.page > 0){
        page = req.query.page
    }
    const totalBlogs = await Blog.count(options)
    const allCategories = await Categories.find();
    const blogs = await Blog.find(options).limit(limit).skip(page * limit).sort({_id: -1}).populate('category').populate('author')
    res.render('main', {categories: allCategories, blogs, user: req.user ? req.user : {}, pages: Math.ceil(totalBlogs / limit)});
})
router.get('/profile/:id', async(req, res) => {
    const blogs = await Blog.find({author: req.params.id}).sort({_id: -1}).populate('category').populate('author')
    // console.log(blogs);
    res.render('profile', {blogs, user: req.user ? req.user : {}})
})
router.get('/detailBlog/:id', async(req, res) => {
    const comments = await Comment.find({blogId: req.params.id}).populate('authorId')
    const totalComments = await Comment.count({blogId: req.params.id})
    const allCategories = await Categories.find();
    const blog = await Blog.findById(req.params.id).populate('category').populate('author');
    blog.views += 1;
    await blog.save();
    res.render('detailBlog', {blog: blog, categories: allCategories, comments: comments, totalComments: totalComments, user: req.user ? req.user : {}});
})
router.get('/new', async(req, res) => {
    const allCategories = await Categories.find();
    res.render('newBlog', {categories: allCategories, user: req.user ? req.user : {}});
})
router.get('/edit/:id', async(req, res) => {
    const allCategories = await Categories.find();
    const blog = await Blog.findById(req.params.id)
    res.render('editBlog', {categories: allCategories,user: req.user ? req.user : {}, blog: blog});
})
router.get('/login', (req, res) => {
    res.render('logIn', {user: req.user ? req.user : {}});
})
router.get('/register', (req, res) => {
    res.render('register', {user: req.user ? req.user : {}});
})
module.exports = router;