const express = require('express');
const router = express.Router();
const {editBlog} = require('./controller');

router.post('/api/editBlog', editBlog);

module.exports = router;