const express = require('express');
const router = express.Router();
const Blog = require('./Blog')
const {upload} = require('./multer')
const {isAuth} = require('../auth/middlewares')
const {createBlog} = require('./controller')

router.post('/api/newBlog', isAuth, upload.single('image'), createBlog);

module.exports = router;