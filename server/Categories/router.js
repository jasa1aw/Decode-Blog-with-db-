const express = require('express');
const router = express.Router();
const {getAllCategories} = require('./controller');
const writeDataCategories = require('./seed');

router.get('/api/category', getAllCategories);

writeDataCategories();

module.exports = router;

