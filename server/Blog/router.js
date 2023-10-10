const express = require('express');
const router = express.Router();
const Blog = require('./Blog')
const {upload} = require('./multer')
const {isAuth} = require('../auth/middlewares')
const {createBlog, editBlog} = require('./controller')

router.post('/api/new', isAuth, upload.single('image'), createBlog);
router.post('/api/blog/edit', isAuth, upload.single('image'), editBlog)

module.exports = router;